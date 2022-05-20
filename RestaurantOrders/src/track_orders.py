from collections import Counter


class TrackOrders:
    KEY_DISHES = 'dishes'
    KEY_DAYS = 'days'

    def __init__(self):
        self.orders_quantity = 0
        self.costumers = dict()
        self.ordered_dishes = set()
        self.days_movement = Counter()

    def __len__(self):
        return self.orders_quantity

    def add_new_order(self, costumer, order, day):
        self.check_and_update_costumer(costumer, order, day)
        self.ordered_dishes.add(order)
        self.days_movement.update([day])
        self.orders_quantity += 1

    def get_most_ordered_dish_per_costumer(self, costumer):
        costumer_data = self.costumers.get(costumer)
        if costumer_data:
            most_ordered, _ = costumer_data.get(self.KEY_DISHES) \
              .most_common(1)[0]
            return most_ordered
        else:
            return None

    def get_never_ordered_per_costumer(self, costumer):
        costumer_data = self.costumers.get(costumer)
        costumer_dishes = costumer_data.get(self.KEY_DISHES).keys()
        if costumer_data:
            return {
                dish for dish in self.ordered_dishes
                if dish not in costumer_dishes
            }
        else:
            return []

    def get_days_never_visited_per_costumer(self, costumer):
        costumer_data = self.costumers.get(costumer)
        costumer_days = costumer_data.get(self.KEY_DAYS)
        if costumer_data:
            return {
                day for day in self.days_movement
                if day not in costumer_days
            }
        else:
            return []

    def get_busiest_day(self):
        busiest_day, _ = self.days_movement.most_common(1)[0]
        return busiest_day

    def get_least_busy_day(self):
        least_busy_day, _ = self.days_movement.most_common()[-1]
        return least_busy_day

    def check_and_update_costumer(self, costumer, order, day):
        if costumer not in self.costumers:
            self.costumers[costumer] = dict(dishes=Counter(), days=set())
        self.costumers[costumer][self.KEY_DISHES].update([order])
        self.costumers[costumer][self.KEY_DAYS].add(day)
