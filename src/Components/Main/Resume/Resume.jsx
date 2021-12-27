import React from "react";
import "./Resume.css";
import { Container, Table } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <Container className="mi-contenedor">
          <h3 className="container-title">My resume</h3>
          <br />
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>EDUCATION AND TRAINING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full-Stack development program</td>
                  <td>Numen Academy (Buenos Aires, Argentina)</td>
                </tr>
                <tr>
                  <td>ENG-SPA Simultaneous and conference interpretation</td>
                  <td>
                    McDonough Interpretation School (Buenos Aires, Argentina)
                  </td>
                </tr>
                <tr>
                  <td>ENG-SPA Literary, Technical and scientific Translation</td>
                  <td>
                    Escuela Normal Superior en Lenguas Vivas "Sofía Broquen de
                    Spangenberg" (Buenos Aires, Argentina)
                  </td>
                </tr>
                <tr>
                  <td>Diploma in Economics and Organization Management</td>
                  <td>High School Media Nº 7 (Junin, Argentina)</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>TECHNOLOGIES</th>
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
          <div className="container-edu">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>PROFESSIONAL CAREER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>English isntructor</strong> in charge of different
                    groups (B2/C1) and <strong>EN-SP Translator</strong> in charge
                    of various translation projects
                  </td>
                  <td>Utalk (in-company teaching and translation services) | 2020- Currently</td>
                </tr>
                <tr>
                  <td><strong>Consecutive interpretation</strong> during his four-day official visit to Argentina and his closing speechs</td>
                  <td>EN-ES Interpreting to Barry Rassin (Rotary International President) | 2018</td>
                </tr>
                <tr>
                  <td><strong>Translation project</strong> on bibliographic texts as part of the program Knowledge and Educational Practices</td>
                  <td>FLACSO Argentina (Latin American University of Social Sciences) | 2018
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
      </Container>
    </>
  );
};

export default Resume;
