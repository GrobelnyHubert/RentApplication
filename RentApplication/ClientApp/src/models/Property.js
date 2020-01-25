"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Property = /** @class */ (function () {
    function Property(Id, type, description, rooms, area, washer, refrigerator, iron, addressId, ownerId) {
        this.Id = Id;
        this.type = type;
        this.description = description;
        this.rooms = rooms;
        this.area = area;
        this.washer = washer;
        this.refrigerator = refrigerator;
        this.iron = iron;
        this.addressId = addressId;
        this.ownerId = ownerId;
    }
    return Property;
}());
exports.Property = Property;
;
//# sourceMappingURL=property.js.map