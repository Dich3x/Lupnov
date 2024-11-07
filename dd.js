function max_damage(unit_basic_attack, method_of_attack, energy) {
    if (typeof(unit_basic_attack) != "number" | typeof(method_of_attack != "string") | typeof(energy) != "number") {
        console.log("Ошибка в параметрах")
        return
    }
    console.log(`Начальный урон от оружия - ${unit_basic_attack}`)
    console.log(`Метод атаки - ${method_of_attack}`)
    console.log(`Энергия - ${energy}`)
    // выбор метада атаки
    if (method_of_attack == "one attack" && enough_energy(energy, 1)) {
        one_attack = unit_basic_attack
        console.log(`Атака нанесла ${one_attack}`)
    } else if (method_of_attack == "two attack" && enough_energy(energy, 2)) {
        two_attack = unit_basic_attack * 2
        console.log(`Атака нанесла ${two_attack}`)
    } else if (method_of_attack == "ulta" && enough_energy(energy, 4)) {
        ulta = unit_basic_attack * 5;
        console.log(`Атака нанесла ${ulta}`)
    } else if (enough_energy == false) {
        console.log("Мало энергии")
    } else {
        console.log("Второй параметр задан неверно")
    }
    console.log("=============================================")
}
// хватит энергии
function enough_energy(energ, need_energy) {
        if ((energ - need_energy) >= 0) {
            energ -= need_energy;
            console.log(`Потрачено энергии - ${need_energy}`)
            console.log(`Осталось энергии - ${energ}`)
            result = true;
        } else {
            result = false
        }
        return result

    }
max_damage(30, "one attack", 3)
max_damage(30, "two attack", 3)
max_damage(30, "ulta", 3)
max_damage(30, 30)