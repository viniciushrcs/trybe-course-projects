from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    def import_data(path):
        with open(path) as file:
            if path.endswith(".json"):
                return json.load(file)
            raise ValueError("Arquivo inválido")
