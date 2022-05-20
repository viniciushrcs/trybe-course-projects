from datetime import datetime
from collections import Counter


class SimpleReport:
    def generate(list):
        today = datetime.today().strftime("%Y-%m-%d")
        fabrication_list = []
        expiration_list = []
        for product in list:
            fabrication_list.append(product["data_de_fabricacao"])
            if product["data_de_validade"] > today:
                expiration_list.append(product["data_de_validade"])

        oldest_fabrication = min(fabrication_list)
        closest_expiration = min(expiration_list)

        c_name = Counter(
            company["nome_da_empresa"] for company in list
        ).most_common()[0][0]

        return (
            f"Data de fabricação mais antiga: {oldest_fabrication}\n"
            f"Data de validade mais próxima: {closest_expiration}\n"
            f"Empresa com maior quantidade de produtos estocados: {c_name}\n"
        )
