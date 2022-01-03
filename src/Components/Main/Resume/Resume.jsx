import React from "react";
import "./Resume.css";
import { Container, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const Resume = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container className="mi-contenedor">
          <h3 className="container-title">{t("resume.title")}</h3>
          <br />
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>{t("resume.title-edu")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("resume.edu1-1")}</td>
                  <td>{t("resume.edu1-2")}</td>
                </tr>
                <tr>
                  <td>{t("resume.edu2-1")}</td>
                  <td>{t("resume.edu2-2")}</td>
                </tr>
                <tr>
                  <td>{t("resume.edu3-1")}</td>
                  <td>{t("resume.edu3-2")}</td>
                </tr>
                <tr>
                  <td>{t("resume.edu4-1")}</td>
                  <td>{t("resume.edu4-2")}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>{t("resume.title-tech")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>HTML</td>
                </tr>
                <tr>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                </tr>
                <tr>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>Restful API</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <div className="container-lang">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>{t("resume.languages")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("resume.sp")}</td>
                </tr>  
                <tr>
                  <td>{t("resume.en")}</td>
                </tr>
                <tr>
                  <td>{t("resume.de")}</td>
                </tr>
              </tbody>
            </Table>
          </div>  
          <br />
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>{t("resume.title-career")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("resume.career1-1")}</td>
                  <td>{t("resume.career1-2")}</td>
                </tr>  
                <tr>
                  <td>{t("resume.career2-1")}</td>
                  <td>{t("resume.career2-2")}</td>
                </tr>
                <tr>
                  <td>{t("resume.career3-1")}</td>
                  <td>{t("resume.career3-2")}</td>
                </tr>
              </tbody>
            </Table>
          </div>
      </Container>
    </>
  );
};

export default Resume;
