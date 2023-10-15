export function formatPrice(price: number) {
    return (price / 10).toLocaleString("fa-IR", {
        style: "currency",
        currency: "IRR"
    })
}