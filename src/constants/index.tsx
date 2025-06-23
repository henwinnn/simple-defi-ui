/* eslint-disable react-refresh/only-export-components */
import SIMPLE_DEX_ABI_JSON from "./SIMPLE_DEX_ABI.json";
import ERC20_ABI_JSON from "./ERC20_ABI.json";

export const SIMPLE_DEX_ABI = SIMPLE_DEX_ABI_JSON;
export const ERC20_ABI = ERC20_ABI_JSON;

// Contract addresses (update dengan alamat yang sudah deployed)
export const CONTRACTS = {
  SIMPLE_DEX: "0x165786665c73ad860e118456F3D9B4d8FE9a4dc5",
  CAMPUS_COIN: "0x3cf706CC14ba5d552f1357237E8ed848433c703A",
  MOCK_USDC: "0x815320E2C37781b24D0F75C70fAF4903E24b25B2",
} as const;

// Token configurations
export const TOKENS = {
  CAMP: {
    address: CONTRACTS.CAMPUS_COIN,
    symbol: "CAMP",
    name: "Campus Coin",
    decimals: 18,
    logo: "🏛️",
  },
  USDC: {
    address: CONTRACTS.MOCK_USDC,
    symbol: "USDC",
    name: "Mock USDC",
    decimals: 6,
    logo: "💵",
  },
} as const;

// DEX configuration
export const DEX_CONFIG = {
  FEE_PERCENT: 0.3, // 0.3%
  SLIPPAGE_TOLERANCE: 0.5, // 0.5%
  DEADLINE: 20, // 20 minutes
} as const;
