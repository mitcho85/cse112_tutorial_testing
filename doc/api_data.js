define({ "api": [
  {
    "type": "get",
    "url": "/hello",
    "title": "Respond back name passed as query",
    "name": "Ping_Name",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "err",
            "description": "<p>error if occured.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>status message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>query name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/hello.js",
    "group": "_mnt_c_Users_mitch_Documents_GitHub_cse112_node_tutorial_myapp_routes_hello_js",
    "groupTitle": "_mnt_c_Users_mitch_Documents_GitHub_cse112_node_tutorial_myapp_routes_hello_js"
  }
] });
