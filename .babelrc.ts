declare var module: any;

const plugins = [
  [
    "babel-plugin-direct-import",
    {
      modules: [
        "@mui/material",
        "@mui/icons-material",
        "@mui/lab",
        "@mui/system",
      ],
    },
  ],
];

module.exports = { plugins };
