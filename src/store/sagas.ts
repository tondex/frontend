import { all } from "redux-saga/effects";

import connectWalletSaga from "./sagas/connectWallet";
import fetchLpTokensSaga from "./sagas/fetchLpTokens";
import fetchPairsSaga from "./sagas/fetchPairs";
import fetchTokensSaga from "./sagas/fetchTokens";
import makeSwapSaga from "./sagas/makeSwap";
import provideLiquiditySaga from "./sagas/provideLiquidity";
import removeLiquiditySaga from "./sagas/removeLiquidity";
import createPairSaga from "./sagas/createPair";

export default function* rootSaga() {
  yield all([
    fetchPairsSaga(),
    fetchTokensSaga(),
    fetchLpTokensSaga(),
    connectWalletSaga(),
    makeSwapSaga(),
    removeLiquiditySaga(),
    createPairSaga(),
    provideLiquiditySaga(),
  ]);
}
