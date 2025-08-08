export const RESERVATION_ID = "reservationId";
export const RESERVTION_TYPE = "reservationType";

interface ParamPairing {
  queryParam: string;
  queryValue: string | number | boolean;
}

export const buildQueryParms = (params: ParamPairing[]): string => {
  const query = params
    .map(
      ({ queryParam, queryValue }) =>
        `${encodeURIComponent(queryParam)}=${encodeURIComponent(
          String(queryValue)
        )}`
    )
    .join("&");
  return query ? `?${query}` : "";
};
