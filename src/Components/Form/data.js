export const schema = {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 1,
      },
      lockdown_periods: {
        type: 'integer',
        maximum: 5,
      },
      start_date: {
        type: 'string',
        format: 'date',
      },
      end_date: {
        type: 'string',
        format: 'date',
      },
      start_date1: {
        type: 'string',
        format: 'date',
      },
      end_date1: {
        type: 'string',
        format: 'date',
      },
      start_date2: {
        type: 'string',
        format: 'date',
      },
      end_date2: {
        type: 'string',
        format: 'date',
      },
      start_date3: {
        type: 'string',
        format: 'date',
      },
      end_date3: {
        type: 'string',
        format: 'date',
      },
      start_date4: {
        type: 'string',
        format: 'date',
      },
      end_date4: {
        type: 'string',
        format: 'date',
      },
      start_date5: {
        type: 'string',
        format: 'date',
      },
      end_date5: {
        type: 'string',
        format: 'date',
      },
    },
    required: ['username', 'start_date', 'end_date'],
  };

export const uischema = {
    "type": "VerticalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/username"
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date"
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date"
          },
         
        ]
      },
      {
        "type": "Control",
        "scope": "#/properties/lockdown_periods",
        "options": {
          "multi": true
        }
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date1",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [1,2,3,4,5]
                }
              }
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date1",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [1,2,3,4,5]
                }
              }
            }
          }
        ]
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date2",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [2,,3,4,5]
                }
              }
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date2",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [2,3,4,5]
                }
              }
            }
          }
        ]
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date3",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [3,4,5]
                }
              }
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date3",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [3,4,5]
                }
              }
            }
          }
        ]
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date4",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [4,5]
                }
              }
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date4",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [4,5]
                }
              }
            }
          }
        ]
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/start_date5",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [5]
                }
              }
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/end_date5",
            "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/lockdown_periods",
                "schema": {
                  enum: [5]
                }
              }
            }
          }
        ]
      },
    ]
  }