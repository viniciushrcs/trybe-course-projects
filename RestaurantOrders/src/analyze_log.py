import csv
from src.track_orders import TrackOrders


def analyze_log(path_to_file):
    log = TrackOrders()

    with open(path_to_file, 'r') as csvfile:
        csv_reader = csv.reader(csvfile, delimiter=',')
        for row in csv_reader:
            log.add_new_order(*row)

    results = [
        log.get_most_ordered_dish_per_costumer('maria'),
        log.costumers.get('arnaldo').get('dishes').get('hamburguer'),
        log.get_never_ordered_per_costumer('joao'),
        log.get_days_never_visited_per_costumer('joao')
    ]

    with open('data/mkt_campaign.txt', 'w') as output_file:
        output_file.writelines('\n'.join([str(result) for result in results]))

# Academic Honesty:
# https://github.com/tryber/sd-09-restaurant-orders/pull/34/files
# https://github.com/tryber/sd-09-restaurant-orders/pull/39/files
# https://app.betrybe.com/course/computer-science/estrutura-de-dados-i/set/e4286822-c7c1-44a8-9baf-089446774ccf/o-que-vamos-aprender/762beaab-5551-4ad2-bfdf-cce3a9b590df?use_case=side_bar
