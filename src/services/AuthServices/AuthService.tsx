import { testApi } from "../axios";

export const LoginApi = async () => {
  let { data } = await testApi.get("/login", {
    params: {},
  });
  return data;
};
