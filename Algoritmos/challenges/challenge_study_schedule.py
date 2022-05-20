def study_schedule(permanence_period, target_time):
    counter = 0

    for entry, exit in permanence_period:
        if (not entry or not exit) or target_time is None:
            return None
        else:
            if entry <= target_time <= exit:
                counter += 1
    return counter
