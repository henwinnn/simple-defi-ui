import { useQuery } from "@tanstack/react-query";

const fetchPriceChart = async () => {
  const res = await fetch("http://localhost:42069/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query MyQuery {
  priceDatas {
    items {
      timestamp
      price
      volume24h
      tvl
    }
  }
}
      `,
    }),
  });

  const { data } = await res.json();

  return data.priceDatas;
};

export const usePriceChart = () => {
  return useQuery({
    queryKey: ["PriceData"],
    queryFn: fetchPriceChart,
  });
};
