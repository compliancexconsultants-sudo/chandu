import React, { useState } from "react";
import "./AllServices.css";
import { useNavigate } from "react-router-dom";
import { useService } from "../states/ServiceContext";

/* IMPORT SAME DATA YOU USE IN HEADER */
import gstRegistrationData from "../views/services-hard/gstRegistration/gstRegistration.data";
import esiRegistrationData from "../views/services-hard/data/esiRegistration.data";
import udyamRegistrationData from "../views/services-hard/data/udyamRegistrationData.data";
import panCardServiceData from "../views/services-hard/data/panCardService.data";
import fssaiRegistrationData from "../views/services-hard/data/fssaiRegistration.data";
import epfRegistrationData from "../views/services-hard/data/epfRegistration.data";
import tradeLicenseRegistrationData from "../views/services-hard/data/tradeLicenseRegistration.data";
import tanRegistrationData from "../views/services-hard/data/tanRegistration.data";
import shopEstablishmentData from "../views/services-hard/data/shopEstablishment.data";
import msmeRegistrationData from "../views/services-hard/data/msmeRegistration.data";
import iecRegistrationData from "../views/services-hard/data/iecRegistration.data";
import professionalTaxRegistrationData from "../views/services-hard/data/professionalTaxRegistration.data";
import gstReturnFilingData from "../views/services-hard/data/gstReturnFiling.data";
import incomeTaxAssessmentData from "../views/services-hard/data/incomeTaxAssessment.data";
import tdsReturnFilingData from "../views/services-hard/data/tdsReturnFiling.data";
import professionalTaxFilingData from "../views/services-hard/data/professionalTaxFiling.data";
import esiEpfFilingData from "../views/services-hard/data/esiEpfFiling.data";
import Layout from "../components/Layout";

const SERVICES = [
  {
    category: "Licenses & Registrations",
    items: [
      { name: "GST Registration", data: gstRegistrationData },
      { name: "ESI Registration", data: esiRegistrationData },
      { name: "Udyam Registration", data: udyamRegistrationData },
      { name: "PAN Application", data: panCardServiceData },
      { name: "FSSAI License", data: fssaiRegistrationData },
      { name: "EPF Registration", data: epfRegistrationData },
      { name: "Trade License", data: tradeLicenseRegistrationData },
      { name: "TAN Application", data: tanRegistrationData },
      { name: "Shop & Establishment", data: shopEstablishmentData },
      { name: "MSME Registration", data: msmeRegistrationData },
      { name: "Import Export Code", data: iecRegistrationData },
      {
        name: "Professional Tax Registration",
        data: professionalTaxRegistrationData,
      },
    ],
  },
  {
    category: "Tax & Compliance",
    items: [
      { name: "GST Return Filing", data: gstReturnFilingData },
      { name: "Income Tax Filing", data: incomeTaxAssessmentData },
      { name: "TDS Filing", data: tdsReturnFilingData },
      { name: "Professional Tax Filing", data: professionalTaxFilingData },
      { name: "ESI & EPF Filing", data: esiEpfFilingData },
    ],
  },
];

export default function AllServices() {
  const navigate = useNavigate();
  const { setServiceData } = useService();
  const [search, setSearch] = useState("");

  const openService = (service) => {
    setServiceData(service.data);
    navigate("/CXServices");
  };

  return (
    <Layout>
  <div className="all-services-page">

    <div className="services-header">
      <h1>Explore Services</h1>
      <p>Select a service and get started with expert assistance</p>

      <input
        className="service-search"
        placeholder="Search for a service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {SERVICES.map((section) => (
      <div key={section.category} className="service-category">

        <div className="category-header">
          <h2>{section.category}</h2>
          <span>{section.items.length} Services</span>
        </div>

        <div className="service-grid">
          {section.items
            .filter((s) =>
              s.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((service) => (
              <div
                key={service.name}
                className="service-card"
                onClick={() => openService(service)}
              >
                <div className="service-card-content">
                  <h3>{service.name}</h3>
                  <p>Apply online with guided professional support</p>
                </div>

                <button className="card-btn">
                  View Details →
                </button>
              </div>
            ))}
        </div>
      </div>
    ))}

  </div>
</Layout>
  );
}
