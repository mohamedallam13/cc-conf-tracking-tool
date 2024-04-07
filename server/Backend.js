(function (root, factory) {
  root.BACKEND = factory();
})(this, function () {
  const { REFERENCES_MANAGER } = CCLIBRARIES

  const MASTER_INDEX_FILE_ID = "1ohC9kPnMxyptp8SadRBGAofibGiYTTev"
  const REQUIRED_REFERENCES = ["ccTrackingFile", "CCJSONSimpleConfessionsIndex"];

  const initDB = JSON_DB_HANDLER.init

  let indexFileId
  let jsonDBManager

  function loadTracking() {
    const referencesObj = REFERENCES_MANAGER.init(MASTER_INDEX_FILE_ID).requireFiles(REQUIRED_REFERENCES[0]).requiredFiles;
    const ccTrackingFileObj = referencesObj.ccTrackingFile.fileContent;
    return JSON.stringify(ccTrackingFileObj)
  }

  function updateDB(request, status) {
    getDB()
    const entryObj = updateInDBStatus(request, status)
    writeToDB()
    return JSON.stringify({ success: true, entryObj })
  }

  function clearStatus(request) {
    getDB()
    clearStatusInDB(request)
    writeToDB()
    return JSON.stringify({ success: true })
  }

  function getDB() {
    const referencesObj = REFERENCES_MANAGER.init(MASTER_INDEX_FILE_ID).requireFiles(REQUIRED_REFERENCES[1]).requiredFiles;
    indexFileId = referencesObj.CCJSONSimpleConfessionsIndex.fileId // Get DB Index File Id to start Connection
    jsonDBManager = initDB(indexFileId) // Start Connection with DB
  }


  function updateInDBStatus(request, status) {
    const { serialNum, rejectionReasons } = request
    const serialN = parseInt(serialNum)
    const entryInDB = getEntryFromDB(serialN)
    return updateStatus(entryInDB, status, rejectionReasons)
  }

  function updateStatus(entryInDB, status, rejectionReasons) {
    const { addToDB } = jsonDBManager
    const statusUpdateObj = {
      status,
      rejectionReasons,
      timestamp: new Date()
    }
    entryInDB.status.unshift(statusUpdateObj)
    addToDB(entryInDB, { dbMain: "CCMAIN" })
    return entryInDB
  }

  function clearStatusInDB(request) {
    const { addToDB } = jsonDBManager
    const { serialNum } = request
    const serialN = parseInt(serialNum)
    const entryInDB = getEntryFromDB(serialN)
    entryInDB.status = []
    addToDB(entryInDB, { dbMain: "CCMAIN" })
  }

  function getEntryFromDB(serialNum) {
    const { lookUpByKey } = jsonDBManager
    return lookUpByKey(serialNum, { dbMain: "CCMAIN" })
  }

  function writeToDB() {
    const { saveToDBFiles } = jsonDBManager
    saveToDBFiles()
  }

  return {
    loadTracking,
    updateDB,
    clearStatus
  }

})

function loadTracking() {
  return BACKEND.loadTracking()
}

function updateDB(request, status) {
  console.log(request, status)
  return BACKEND.updateDB(request, status)
}
function clearStatus(request) {
  console.log(request)
  return BACKEND.clearStatus(request)
}
