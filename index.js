document.addEventListener('DOMContentLoaded', () => {
    let couponData = [
        {
            id: 1,
            discount: '30%',
            title: 'Buy 1 Get 2',
            price: '18.00'
        },
        {
            id: 2,
            discount: '30%',
            title: 'Buy 2 Get 4',
            price: '24.00'
        },
        {
            id: 3,
            discount: '30%',
            title: 'Buy 3 Get 6',
            price: '36.00'
        },
    ]
    // loop to display coupon boxes
    const container = document.getElementById('coupon-box');
    couponData.forEach(coupon => {
        const couponHtml = `
            <div class="coupon-box" data-id="${coupon.id}">
                <div class="coupon-discount-percent">
                        <span>${coupon.discount}<br>Off</span>
                </div>
                <div class="coupon-offers">
                    <div>
                        <input class="select-box" type="radio" id="coupon-${coupon.id}" name="coupon" value="${coupon.id}">
                    </div>
                    <div class="coupon-text">
                        <span>${coupon.title}</span>
                        <span><b>$${coupon.price} USD</b></span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += couponHtml;
    });

    //on radio button click
    const radioButtons = document.querySelectorAll('.select-box');
    radioButtons.forEach(button => {
        button.addEventListener('change', (event) => {
            const selectedId = event.target.value;
            // show all coupon discounts
            document.querySelectorAll('.coupon-discount-percent').forEach(discountDiv => {
                discountDiv.style.display = 'flex';
            });
            //coupon box when not clicked on radio button
            document.querySelectorAll('.coupon-box').forEach(box => {
                box.style.height = '74px';
                box.style.flexDirection = 'row';
            });

            // Show the selected counpon box
            const selectedCouponBox = document.querySelector(`.coupon-box[data-id="${selectedId}"]`);
            // if selected coupon then hide percent and increse height to add size and color
            if (selectedCouponBox) {
                const discountDiv = selectedCouponBox.querySelector('.coupon-discount-percent');
                if (discountDiv) {
                    discountDiv.style.display = 'none';
                    selectedCouponBox.style.height = '150px'
                    selectedCouponBox.style.flexDirection = 'column'
                }
            }
            const sizeColorHtml = `
                <div class="coupon-size-color">
                    <table>
                        <tr>
                            <th></th>
                            <th class="t-head">Size</th>
                            <th class="t-head">Color</th>
                        </tr>
                        <tr>
                            <td class="t-head">#1</td>
                            <td>
                                <div class="custom-select-wrapper">
                                    <select name="size" id="size-1">
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="custom-select-wrapper" style="margin-left: 7px;">
                                    <select name="color" id="color-1">
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="yellow">Yellow</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="t-head">#2</td>
                            <td>
                                <div class="custom-select-wrapper">
                                    <select name="size" id="size-2">
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="custom-select-wrapper" style="margin-left: 7px;">
                                    <select name="color" id="color-2">
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="yellow">Yellow</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            `;

            // remove all size-color div
            document.querySelectorAll('.coupon-size-color').forEach(sizeColorDiv => {
                sizeColorDiv.remove();
            });
            //add size color div to selected coupon
            const offersDiv = selectedCouponBox.querySelector('.coupon-offers');
            if (offersDiv) {
                offersDiv.insertAdjacentHTML('afterend', sizeColorHtml);
            }

        });
    });
});