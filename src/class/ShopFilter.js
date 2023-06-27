export class ShopFIlter {
    constructor (data) {
        Object.assign(this, data)
        this.items = (this.items || []).map(v => new FilterItem(v))
    }
}

export class FilterItem {
    static T_CHECKBOX = 1
    static T_RADIO = 2

    constructor (data) {
        this.name = null
        this.type = FilterItem.T_CHECKBOX
        this.title = null
        this.expanded = false
        Object.assign(this, data)
        this.values = (this.values || []).map(v => new FilterValue(v))
    }

    select (v) {
        if (this.type === FilterItem.T_CHECKBOX) {
            v.selected = !v.selected
            return
        }
        if (v.selected) return
        this.values.forEach(i => {
            i.selected = i === v
        });
    }
}


export class FilterValue {
    static T_VALUE = 1
    static T_RANGE = 2

    constructor (data) {
        this.title = null
        this.type = FilterValue.T_VALUE
        this._value = [null, null]
        this.selected = false
        Object.assign(this, data)
    }

    get value () {
        if (this.type === FilterValue.T_RANGE) return this._value
        return this._value[0]
    }

    set value (v) {
        if (this.type === FilterValue.T_RANGE) {
            this._value = v
            return
        }
        this._value[0] = v
    }
}

export const mainFilter = new ShopFIlter({
    items: [
        {
            name: 'productType',
            title: 'Product Type',
            values: [
                { title: 'Cream', value: 1 },
                { title: 'Mask', value: 2 },
                { title: 'Tonic', value: 3 },
                { title: 'Gel', value: 4 }
            ]
        },
        {
            name: 'ingredientType',
            title: 'Ingredient Type',
            values: [
                { title: 'Paraben', value: 1 },
                { title: 'Talc', value: 2 },
                { title: 'Retinol', value: 3 },
                { title: 'Surfactant', value: 4 },
                { title: 'Alpha hydroxy acid', value: 5 }
            ]
        },
        {
            name: 'skinType',
            title: 'Skin Type',
            values: [
                { title: 'All', value: 1 },
                { title: 'Combination/Oily', value: 2 },
                { title: 'Dry', value: 3 },
                { title: 'Normal', value: 4 },
                { title: 'Sensitive', value: 5 }
            ]
        },
        {
            name: 'priceRange',
            title: 'Price Range',
            type: FilterItem.T_RADIO,
            expanded: true,
            values: [
                { title: 'Under $25', value: 1 },
                { title: '$25 - $50', value: 2 },
                { title: '$50 - $100', value: 3 },
                { title: 'Normal', type: FilterValue.T_RANGE }
            ]
        }
    ]
})
