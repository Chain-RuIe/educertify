import smartpy as sp
import traceback


class CertificateStore(sp.Contract):
    def __init__(self, certId: str, name: dict, timestr: str):
        try:
            # timeObj = parser.parse(timestr)
            fName = name["fName"]
            lName = name["lName"]
            self.init(certId=certId, fName=fName, lName=lName, date=timestr)
        except Exception as e:
            print(traceback.format_exc())
            raise ValueError("Invalid input parameters")

    @sp.entry_point
    def replace(self, params: dict):
        try:
            # for k, v in params.items():
            #     if k == "name":
            #         self.data.fName = v["fName"]
            #         self.data.lName = v["lName"]
            #     if k == "timestr":
            #         self.data.date = v['date']
            self.data.fName = params["fName"]
            self.data.lName = params["lName"]
            self.data.date = params["date"]
            self.data.certId = params['certId']
        except Exception as e:
            print(traceback.format_exc())
            raise ValueError("Invalid input parameters")


if "templates" not in __name__:
    @sp.add_test(name="CertificateStore")
    def test():
        c1 = CertificateStore(
            "123", {"fName": "Chicken", "lName": "Nuggets"}, "2021-09-06T09:16:02+0000")
        scenario = sp.test_scenario()
        scenario.h1("Store Value")
        scenario += c1
        c1.replace({"fName": "Bob", "lName": "Ali",
                   "date": "2021-09-11T09:16:02+0000", "certId": "123"})
        scenario.p("Some computation").show(c1.data)

    sp.add_compilation_target("certStore", CertificateStore(
        "123", {"fName": "Chicken", "lName": "Nuggets"}, "2021-09-06T09:16:02+0000"))
