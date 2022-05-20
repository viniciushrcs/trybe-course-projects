from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport

import csv
import json
import xmltodict


class Inventory:
    def read_csv_file(path):
        with open(path, "r") as csv_file:
            csv_list = csv.DictReader(csv_file)
            return [product for product in csv_list]

    def read_json_file(path):
        with open(path, "r") as json_file:
            json_list = json.load(json_file)
            return json_list

    def read_xml_file(path):
        with open(path, "r") as xml_file:
            xml_list = xmltodict.parse(xml_file.read())["dataset"]["record"]
            return [dict(row) for row in xml_list]

    def handle_format(cls, path):
        if path.endswith("csv"):
            return cls.read_csv_file(path)
        elif path.endswith("json"):
            return cls.read_json_file(path)
        else:
            return cls.read_xml_file(path)

    @classmethod
    def import_data(cls, path, type):
        imported_list = cls.handle_format(cls, path)
        if type == "simples":
            return SimpleReport.generate(imported_list)
        elif type == "completo":
            return CompleteReport.generate(imported_list)
