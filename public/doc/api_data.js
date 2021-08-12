define({ "api": [
  {
    "type": "post",
    "url": "/upload/image",
    "title": "上传图片",
    "version": "1.0.0",
    "name": "image",
    "group": "文件管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>文件（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": \"url\",\n     \"msg\": \"上传成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/upload.js",
    "groupTitle": "文件管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/upload/image"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/addUser",
    "title": "添加用户",
    "version": "1.0.0",
    "name": "addUser",
    "group": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户 name（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>用户 sex（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>用户 age（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": \"id\",\n     \"msg\": \"添加用户成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/users.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/users/addUser"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/delUser",
    "title": "删除用户",
    "version": "1.0.0",
    "name": "delUser",
    "group": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户 id（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": \"id\",\n     \"msg\": \"删除用户成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/users.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/users/delUser"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/getDetail",
    "title": "获取用户详情",
    "version": "1.0.0",
    "name": "getDetail",
    "group": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户 id（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": {},\n     \"msg\": \"获取用户信息成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/users.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/users/getDetail"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/getList",
    "title": "获取用户列表",
    "version": "1.0.0",
    "name": "getList",
    "group": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户 id（非必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": [],\n     \"msg\": \"获取用户信息成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/users.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/users/getList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/setUser",
    "title": "修改用户",
    "version": "1.0.0",
    "name": "setUser",
    "group": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户 id（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户 name（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>用户 sex（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>用户 age（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>结果标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>结果数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应",
          "content": "{\n     \"code\": 0,\n     \"data\": \"id\",\n     \"msg\": \"修改用户成功了噢~\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/api/users.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:10240/api/users/setUser"
      }
    ]
  }
] });
