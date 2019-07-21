export class MenuItemsService{

    bevrages: string[] =[
        "Sparkling Cranberry Punch",
        "Raspberry Fizz",
        "Virgin Frozen Margarit",
        "Iced Chocolate Delight",
        "Summer Punch"
    ];
    menuItems(): string[] {
        return this.bevrages;
    }
}