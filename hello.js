"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = async function (event) {
    console.log("Event:", JSON.stringify(event));
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda!" }),
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxXQUFVLEtBQVU7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE9BQU87UUFDTCxVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7S0FDeEQsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICBjb25zb2xlLmxvZyhcIkV2ZW50OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiSGVsbG8gZnJvbSBMYW1iZGEhXCIgfSksXHJcbiAgfTtcclxufTtcclxuIl19