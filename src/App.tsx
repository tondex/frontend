import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Account from "./components/Account";
import AddLiquidity from "./components/AddLiquidityPage";
import Header from "./components/Header/Header";
import Manage from "./components/Manage";
import Notifications from "./components/Notifications";
import ProvideLiquidConfirmPopup from "./components/ProvideLiquidConfirmPopup";
import PoolExplorer from "./components/PoolExplorer/PoolExplorer";
import Pool from "./components/PoolPage/Pool";
import RemoveLiquidityPage from "./components/RemoveLiquidityPage";
import ReturnLiquidConfirmPopup from "./components/ReturnLiquidConfirmPopup";
import SwapConfirmPopup from "./components/SwapConfirmPopup";
import CreatePairConfirmPopup from "./components/CreatePairConfirmPopup";
import SwapPage from "./components/SwapPage";
import WaitingPopup from "./components/WaitingPopup";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import {
  changeThemeAction,
  requestLpTokensFetchAction,
  requestPairsFetchAction,
  requestTokensFetchAction,
} from "./store/actions";
import { ThemeVariant } from "./types";

import CreatePairPage from "./components/CreatePairPage";

import NativeLogin from "./components/NativeLogin/NativeLogin";
import PoolDetail from "./components/PoolExplorerDetails/FarmingDetail/PoolDetail";
import IndexPage from "./components/IndexPage";


function App() {
  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.appTheme);

  useEffect(() => {
    dispatch(
      changeThemeAction(
        (localStorage.getItem("appTheme") as ThemeVariant) || "light",
      ),
    );
  }, [dispatch]);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", appTheme);
    localStorage.setItem("appTheme", appTheme);
  }, [appTheme]);

  useEffect(() => {
    dispatch(requestTokensFetchAction());
    dispatch(requestPairsFetchAction());
    dispatch(requestLpTokensFetchAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/create-pair" element={<CreatePairPage />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/native-login" element={<NativeLogin />} />
        <Route path="/pool-explorer" element={<PoolExplorer />} />
        <Route path="/pool-explorer/:pair" element={<PoolDetail />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/swap" element={<SwapPage />} />
        <Route path="/add-liquidity" element={<AddLiquidity />} />
        <Route path="/remove-liquidity/:lpTokenAddress"
          element={<RemoveLiquidityPage />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/manage/:lpTokenAddress" element={<Manage />} />
      </Routes>
      <Notifications />
      <WaitingPopup />
      <SwapConfirmPopup />
      <CreatePairConfirmPopup />
      <ReturnLiquidConfirmPopup />
      <ProvideLiquidConfirmPopup />
    </>
  );
}

export default App;
