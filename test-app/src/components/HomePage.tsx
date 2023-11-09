import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { useTranslation } from "react-i18next";
import { fetchDataFromAPI } from "../apiService/api";

const HomePage: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const { t } = useTranslation();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>{isLogin ? <p>{t("welcome")}</p> : <p>{t("title_login")}</p>}</div>
    </>
  );
};

export default HomePage;
