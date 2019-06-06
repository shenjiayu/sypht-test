import reducer from './file';
import * as types from '../constants/ActionTypes';

describe('file reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      files: []
    });
  });

  it('should handle FILE_UPLOAD', () => {
    expect(reducer(undefined, {
      type: types.FILE_UPLOAD,
      data: {
        "fileId": "e11ce22e-1604-471f-8586-17073e9e5b5e",
        "status": "FINALISED",
        "results": {
            "timestamp": "2019-06-04T12:57:06.139Z",
            "fields": [
                {
                    "name": "invoice.subTotal",
                    "value": null,
                    "confidence": 0.6202852995487125,
                    "boundingBox": null
                },
                {
                    "name": "invoice.gst",
                    "value": null,
                    "confidence": 0.7689210408893556,
                    "boundingBox": null
                },
                {
                    "name": "invoice.dueDate",
                    "value": null,
                    "confidence": 0.9232136418502014,
                    "boundingBox": null
                },
                {
                    "name": "invoice.total",
                    "value": "310.00",
                    "confidence": 0.9745946815310619,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8029138000809389,
                            "y": 0.4183585930797827
                        },
                        "bottomRight": {
                            "x": 0.848239579117766,
                            "y": 0.43094080640549043
                        }
                    }
                },
                {
                    "name": "invoice.amountPaid",
                    "value": null,
                    "confidence": 0.7406260199991466,
                    "boundingBox": null
                },
                {
                    "name": "invoice.amountDue",
                    "value": null,
                    "confidence": 0.889133132775713,
                    "boundingBox": null
                },
                {
                    "name": "invoice.purchaseOrderNo",
                    "value": null,
                    "confidence": 0.9826440788026235,
                    "boundingBox": null
                },
                {
                    "name": "document.supplierABN",
                    "value": "1111111111",
                    "confidence": 0.771523257047453,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.11210036422501012,
                            "y": 0.07320560480411782
                        },
                        "bottomRight": {
                            "x": 0.19465803318494537,
                            "y": 0.08550185873605948
                        }
                    }
                },
                {
                    "name": "document.date",
                    "value": "2019-06-04",
                    "confidence": 0.9862239448730192,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8559287737757992,
                            "y": 0.24878467257649414
                        },
                        "bottomRight": {
                            "x": 0.9299878591663294,
                            "y": 0.2607949671146697
                        }
                    }
                },
                {
                    "name": "document.type",
                    "value": {
                        "bank": {
                            "value": false,
                            "confidence": 0.9433333333333334
                        },
                        "bill": {
                            "value": false,
                            "confidence": 1
                        },
                        "bpay": {
                            "value": false,
                            "confidence": 0.9933333333333333
                        },
                        "check": {
                            "value": false,
                            "confidence": 1
                        },
                        "electricity": {
                            "value": false,
                            "confidence": 1
                        },
                        "invoice": {
                            "value": true,
                            "confidence": 0.99
                        },
                        "paystub": {
                            "value": false,
                            "confidence": 0.9966666666666667
                        }
                    },
                    "confidence": 0.9245817533333334,
                    "boundingBox": null
                },
                {
                    "name": "document.referenceNo",
                    "value": "2001321",
                    "confidence": 0.9903674686295808,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8575475515985431,
                            "y": 0.22848155561910208
                        },
                        "bottomRight": {
                            "x": 0.9174423310400648,
                            "y": 0.2436374034887046
                        }
                    }
                }
            ],
            "numPages": "1"
        }
    }
    })).toEqual({
      files: [{
        "fileId": "e11ce22e-1604-471f-8586-17073e9e5b5e",
        "status": "FINALISED",
        "results": {
            "timestamp": "2019-06-04",
            "fields": [
                {
                    "name": "invoice.subTotal",
                    "value": null,
                    "confidence": 0.6202852995487125,
                    "boundingBox": null
                },
                {
                    "name": "invoice.gst",
                    "value": null,
                    "confidence": 0.7689210408893556,
                    "boundingBox": null
                },
                {
                    "name": "invoice.dueDate",
                    "value": null,
                    "confidence": 0.9232136418502014,
                    "boundingBox": null
                },
                {
                    "name": "invoice.total",
                    "value": "310.00",
                    "confidence": 0.9745946815310619,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8029138000809389,
                            "y": 0.4183585930797827
                        },
                        "bottomRight": {
                            "x": 0.848239579117766,
                            "y": 0.43094080640549043
                        }
                    }
                },
                {
                    "name": "invoice.amountPaid",
                    "value": null,
                    "confidence": 0.7406260199991466,
                    "boundingBox": null
                },
                {
                    "name": "invoice.amountDue",
                    "value": null,
                    "confidence": 0.889133132775713,
                    "boundingBox": null
                },
                {
                    "name": "invoice.purchaseOrderNo",
                    "value": null,
                    "confidence": 0.9826440788026235,
                    "boundingBox": null
                },
                {
                    "name": "document.supplierABN",
                    "value": "1111111111",
                    "confidence": 0.771523257047453,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.11210036422501012,
                            "y": 0.07320560480411782
                        },
                        "bottomRight": {
                            "x": 0.19465803318494537,
                            "y": 0.08550185873605948
                        }
                    }
                },
                {
                    "name": "document.date",
                    "value": "2019-06-04",
                    "confidence": 0.9862239448730192,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8559287737757992,
                            "y": 0.24878467257649414
                        },
                        "bottomRight": {
                            "x": 0.9299878591663294,
                            "y": 0.2607949671146697
                        }
                    }
                },
                {
                    "name": "document.type",
                    "value": {
                        "bank": {
                            "value": false,
                            "confidence": 0.9433333333333334
                        },
                        "bill": {
                            "value": false,
                            "confidence": 1
                        },
                        "bpay": {
                            "value": false,
                            "confidence": 0.9933333333333333
                        },
                        "check": {
                            "value": false,
                            "confidence": 1
                        },
                        "electricity": {
                            "value": false,
                            "confidence": 1
                        },
                        "invoice": {
                            "value": true,
                            "confidence": 0.99
                        },
                        "paystub": {
                            "value": false,
                            "confidence": 0.9966666666666667
                        }
                    },
                    "confidence": 0.9245817533333334,
                    "boundingBox": null
                },
                {
                    "name": "document.referenceNo",
                    "value": "2001321",
                    "confidence": 0.9903674686295808,
                    "boundingBox": {
                        "pageNum": 1,
                        "topLeft": {
                            "x": 0.8575475515985431,
                            "y": 0.22848155561910208
                        },
                        "bottomRight": {
                            "x": 0.9174423310400648,
                            "y": 0.2436374034887046
                        }
                    }
                }
            ],
            "numPages": "1"
        }
      }]
    });
  });
});