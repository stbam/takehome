const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// PROVIDER (CMS data)
app.get("/api/provider/:ccn", (req, res) => {
  res.json({
    "Provider Name": "Demo Facility",
    "Provider Address": "123 Main St",
    "City/Town": "Hartford",
    State: "CT",
    "ZIP Code": "06101",
    "Overall Rating": 4,
    "Health Inspection Rating": 3,
    "Staffing Rating": 4,
    "QM Rating": 5,
    "Number of Certified Beds": 120,
  });
});

// CLAIMS (QM metrics)
app.get("/api/claims/:ccn", (req, res) => {
  res.json({
    521: { "Observed Score": 18.2 },
    556: { "Observed Score": 12.1 },
    551: { "Observed Score": 9.4 },
    552: { "Observed Score": 7.8 },
  });
});

// NATIONAL AVG
app.get("/api/national", (req, res) => {
  res.json({
    "Percentage of short stay residents who were rehospitalized after a nursing home admission": 16.5,
    "Percentage of short stay residents who had an outpatient emergency department visit": 11.2,
    "Number of hospitalizations per 1000 long-stay resident days": 1.9,
    "Number of outpatient emergency department visits per 1000 long-stay resident days": 2.4,
  });
});

// STATE AVG
app.get("/api/state/:state", (req, res) => {
  res.json({
    "Percentage of short stay residents who were rehospitalized after a nursing home admission": 15.2,
    "Percentage of short stay residents who had an outpatient emergency department visit": 10.1,
    "Number of hospitalizations per 1000 long-stay resident days": 2.1,
    "Number of outpatient emergency department visits per 1000 long-stay resident days": 2.6,
  });
});
app.get("/", (req, res) => {
  res.send("INFINITE API is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));
