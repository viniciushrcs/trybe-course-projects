from inventory_report.reports.simple_report import SimpleReport
from collections import Counter


class CompleteReport(SimpleReport):
    @classmethod
    def generate(self, list):
        simple_report = super().generate(list)

        comp_inv = Counter(company["nome_da_empresa"] for company in list)

        inventory_by_company = ""

        for company in comp_inv:
            inventory_by_company += f"- {company}: {comp_inv[company]}\n"

        return (
            f"{simple_report}\n"
            "Produtos estocados por empresa: \n"
            f"{inventory_by_company}"
        )
