import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

const Home = () => {
  const { lang, translate, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    console.log("language === ", lang);
  }, [lang]);

  return (
    <div className="p-3">
      <h1>{translate("home")}</h1>
      <Link className="btn btn-primary" to={"/login"}>
        {translate("login")}
      </Link>
      <button onClick={changeLanguage.bind(this, lang == "vi" ? "en" : "vi")} type="button" class="btn btn-primary">
        Change language
      </button>
    </div>
  );
};

export default Home;
