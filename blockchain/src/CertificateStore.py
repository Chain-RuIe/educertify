import smartpy as sp
import traceback
from datetime import datetime as dt
from dateutil import parser

class CertificateStore(sp.Contract):
    def __init__(self, certId: str, name: dict, timestr: str):
        try:
            timeObj = parser.parse(timestr)
            fName = name["fName"]
            lName = name["lName"]
            self.init(certId=certId, fName=fName, lName=lName, date=timeObj)
        except Exception as e:
            print(traceback.format_exc())
            raise ValueError("Invalid input parameters")

    @sp.entry_point
    def replace(self, params: dict):
        try:
            for k, v in params.items():
                if k == "name":
                    self.data.fName = v["fName"]
                    self.data.lName = v["lName"]
                if k == "timestr":
                    self.data.date = parser.parse(v)
        except Exception as e:
            print(traceback.format_exc())
            raise ValueError("Invalid input parameters")
            

if "templates" not in __name__:
    @sp.add_test(name = "CertificateStore")
    def test():
        c1 = CertificateStore("123", {"fName": "Xihao", "lName": "Chen"}, "2021-09-06T09:16:02+0000")
