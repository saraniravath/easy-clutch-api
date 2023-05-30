import { activatePackage, getTraineeIdOfPackage, listPackagesModel, updatePackagesModel } from "../models/package.js"

export const listPackagesController = (name) => {
    return listPackagesModel(name)
}

export const updatePackagesController = (id, price) => {
    return updatePackagesModel(id, price)
}

export const verifyPackagePaymentController = async (id) => {
    const traineeId = await getTraineeIdOfPackage(id)
    if (traineeId) {
        await activatePackage(traineeId)
        return true;
    }
    return false;

}
