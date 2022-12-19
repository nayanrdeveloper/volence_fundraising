const voielnceAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "CreatorPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "contributor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "currentTotal",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      }
    ],
    "name": "FundReceiced",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "volunterrId",
        "type": "uint256"
      }
    ],
    "name": "approveVolunteer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      }
    ],
    "name": "checkIfFundingCompleteOrExpired",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      }
    ],
    "name": "contribute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_projectTitle",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_fundRaisingDeadline",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_goalAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_volenuteerId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_imgUri",
        "type": "string"
      }
    ],
    "name": "createCauseProject",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllProjects",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "OrgainizationId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "Creator",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "Title",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "Target",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "CapitalRaised",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "Deadline",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "Img",
            "type": "string"
          },
          {
            "internalType": "enum VolenceFund.State",
            "name": "state",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "noOfContribution",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "numRequests",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "desc",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "receipient",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "noOfVoter",
                "type": "uint256"
              }
            ],
            "internalType": "struct VolenceFund.Request[]",
            "name": "requests",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct VolenceFund.Project[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      }
    ],
    "name": "getAllRequests",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "requestId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "desc",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "receipient",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "noOfVoter",
            "type": "uint256"
          }
        ],
        "internalType": "struct VolenceFund.Request[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllVolunteer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "desc",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "volunteerId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "role",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "phone",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "OrgainizationId",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "Creator",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "Title",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "Target",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "CapitalRaised",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Deadline",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "Img",
                "type": "string"
              },
              {
                "internalType": "enum VolenceFund.State",
                "name": "state",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "noOfContribution",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "numRequests",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "desc",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "receipient",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "noOfVoter",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct VolenceFund.Request[]",
                "name": "requests",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct VolenceFund.Project[]",
            "name": "assignedProjects",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "volunteerAddress",
            "type": "address"
          }
        ],
        "internalType": "struct VolenceFund.Volunteer[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      }
    ],
    "name": "getProjectById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "OrgainizationId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "Creator",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "Title",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "Target",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "CapitalRaised",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "Deadline",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "Img",
            "type": "string"
          },
          {
            "internalType": "enum VolenceFund.State",
            "name": "state",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "noOfContribution",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "numRequests",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "desc",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "receipient",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "noOfVoter",
                "type": "uint256"
              }
            ],
            "internalType": "struct VolenceFund.Request[]",
            "name": "requests",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct VolenceFund.Project",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      }
    ],
    "name": "getRefund",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_volunterById",
        "type": "uint256"
      }
    ],
    "name": "getVolunterById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "desc",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "volunteerId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "role",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "phone",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "OrgainizationId",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "Creator",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "Title",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "Target",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "CapitalRaised",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Deadline",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "Img",
                "type": "string"
              },
              {
                "internalType": "enum VolenceFund.State",
                "name": "state",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "noOfContribution",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "numRequests",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "desc",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "receipient",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "noOfVoter",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct VolenceFund.Request[]",
                "name": "requests",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct VolenceFund.Project[]",
            "name": "assignedProjects",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "volunteerAddress",
            "type": "address"
          }
        ],
        "internalType": "struct VolenceFund.Volunteer",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "myContributions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phone",
        "type": "string"
      }
    ],
    "name": "registerasAsVolunteer",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default voielnceAbi;