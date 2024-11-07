def meditate(mana, max_mana, energy, energy_potions):
жыффййййййййцццйф    while(mana != max_mana and (energy != 0 or energy_potions != 0)):
        if energy != 0:
            energy -= 1
            for i in range(3, 0, -1):
                if max_mana >= mana + i:
                    mana += i
                    break
        else:
            energy_potions -= 1
            energy += 50
    return mana, energy, energy_potions
            
