import { View, Text } from 'react-native';
import React from 'react';
import Svg, { Defs, Image, Pattern, Rect, Use } from 'react-native-svg';

export const SettingsIcon = () => (
  <Svg width='32' height='36' viewBox='0 0 32 36' fill='none'>
    <Rect width='32' height='36' fill='url(#pattern0_46_73)' />
    <Defs>
      <Pattern
        id='pattern0_46_73'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <Use
          xlinkHref='#image0_46_73'
          transform='matrix(0.0111111 0 0 0.00987654 0 0.0555556)'
        />
      </Pattern>
      <Image
        id='image0_46_73'
        width='90'
        height='90'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIGklEQVR4nO1daYwURRQuPBDv44dXPIOKsP5RRBBUYmLUaExEzUJi4hkBjyAs8Yj6SxRQBFT+aJRDBQ/ACKgYE/8ICMQ/xhhQogm7uLAuiztd3+sZFdAyz6klwzjdU91dNd07219SyWa2u/q9NzVV9d77XrUQOXLkyJEjR44cOSqglBpMRC8B2ANgNxHN5c8qr8lhAWxYIlJVba6NvpsapVLp3GKxONJ0VOpRfJih+TOTe5VSxxSLxStLpdJ5YqBAKXU0gBUVxtolpRxd754ao/m/xv8Lu1dKORZAZ8XzliuljhLNDinlEzUMtlMpNSTkntFBhi4Wi6OC7lNKHQugo8Z9baLZAeDLWgYD8FSt67u7u08goo1Bhub/8TUBz3o24FnrRbMDwLIA5Q8S0SwAIwAMJ6JWAPN4agkx8qHpB8B8Ipqo720hotm6z1r3LBHNDiJqrWc41w3AXaLZQeXRlqqhpZSXiGYHgDvTNjSA20V/Be8MAEwFcF3QNb7vn0lEP6ZtaCLaRkRnBMlJRNcDeERKOUZkCXohqlRkpVLquMprpJS31nI6UhzVnb7v31IpI8tMRKurrlsgsoCQPe5PRDQdwINEtC5tw4a0tVLKB4hohpb5f9d4nndVFkbzlAwYSzke/VOyYOjxA8DQ14gsgOdkB8p1AXifiB73ff8mz/Mu8jzvVI5tcKyC//Y8b6jv+zcS0TQAH7hYAwB8KLICvYjY2E0AwKK4c6JSahDvFAAsJKJeC/Js43iJyBL0YpLY0L7vn2VDnq6uruOJ6DH+ZSSQZ5rIGvTKbeOnusymXDooxXGPA1Fl8X3/XpE1RN3CAfg76POw0GdccOA/xvS2VmQJ7IxENPJXUsqrAewPuGYLz7e25ezp6TmRiD7pl+46u9URV/slfVkRAK+GXHe3C3mVUkcQ0VsRDN0Z5q7bFo5TSW0AviCipRxm5LgvgDui/BwBvMeK9vXLWzQi6gm49lde0BzpM4iI3owwOLbrYFiLjpO/oxMYM+ul0iKhMseXoH1WK1fHgaiQe2YJR1BKHckyJdWLc5BWBOLMsQUj7ywUCqcEKQzg+wAlSoVC4QLhCHrO/jmpfpzRTywMUwISfuP76zkgHJYM6WNlYiXC9RsVsigbNd/3L08sCHMieL5MYOgFJs8hoo9D+hgvHALAKwn067DGmNJubXsMIbqDpoxqFAqFCwH8EdDPdzzFCEfYt2/fSQB+izMlWg+hMu8CwNMhmeVabUaUZxDRiyFf2mTReL5JkCwHADwZxkVJDCJ6wVAgySMlqruMgD05/zp6e3tPdrwwFgx1e164BvMuDL/11+L07/v+PSF9zhcOQURvGOp2qUs5ItEF4gbLVdmZ2BrQ519SymHCEQCMMxzRLcI1iGiSySKYZPEqFosjg4JO7GQIR9DueU1Ptaq1ihQy3rUMvcLCc94NeQYH9TfzAmmbjE5Eqwz0mydcghcMkz01r+BJn1UsFs+mMuqNrq22kgUMJlsaGLo9iFiZCBw40bSCTSZzGOf4bDwXwDOGc+YWWyObuR6Gz9zIe+jEQaXKmhHDB1eO6IttKA1gctRnp9ES1dQE1IyYttNtGJqINqdtxIgtek1NnJHc1zg+YsnQhQwYL8rI7opj6NgciQFs6M7+OnV8k7bxIrY5cRfDuXFGtsXF8KF+MpLtFJjyFoYD5HWKdg413/dvtmTo5zK8vdvAFAarOcOq6FpHgxyWc4jINzFyCg5LhxOHpUqQeQ1ywZfXccE38dTiwAVfbaCf0yhilKqqfUmCSrJMrvknoO9PhdvM+O8G+k0UGQqTjosbQQPwbcbDpJe5kqFSmOGGhn49Tv9SyvvS+smakmrYBi7liJrKQtTUU085OrgnxVSWZ6jbbFdyxE3ORipuJ6I5aSVnOdlqqhfbgOvMrZPUmW7AqfUIBu5re03pBp7nDQXwZ3+iG+gjMMZaEUITaOoWvocIs9DkOWF02gYQaBYk0G+3FdqB7/tXxBVCC3KgXgUqEd2QFiVMV/xGrgaobFaI80zgSyKENnY7U3Rr9c8MUwA/pEFy5CmDiH5Jql+pVDrfikB1vDRTY39eKy5ARI+mRNvlL3h9Zmi7FUT0mUxE1webtGoi+gQmaUcQakUVEf009iJTIKIzreDtCAbdxiUW7Cxp8v1iza2e3rDzmbjsoPJwKANjL6sorViUUmnF4ogh0MaUVlgMLSrdNvJxEyG85M0Oi4XW9MtioT5wqViWy99kmS6xI+KAWCeyBinl/UkXFnJQ0Kl3Fi/H2cKxTiJr4IUhSyXKPeVpgsum9yaQJxK/2znY57dZdC+lHBNnjuZ7ONTJlOEIAaKwtsPVzicWAHxkY9qgw6eQbt3vDM5B8taKt4OcUeFdCztA/Bn/T/+aViYssA9qq0UWwLsHB8qpLDXXsRZTQw+Eo36mZv7wKr0bWZe2sULaGj4ugs/mCPJyM3F4VQA5fVX1IiKlvC0Jn8/BKO3kUxlqnM572HrDNYgiS9DhxocNDhjcnvUDBgFcy1OiC8epYUA5KJP2aJ4gmh1SymEZMLT78rW0gQyM6IZUVaUNIloSMMoO6hLlFl00OokXWcODuts1Va0vTj5CH/odlLFfKpodCMhqcGFQyClfG0IM/XWQmxxEWOQEhmh2EFFbDcV3hXEkeB8b82UKQwJoEm0D8fUgnUxqrHdPgteDjK6cfvS5Ts3/epA+cOaYR6MpJyLhC28GM23CypE8zQ6qXVMTvWYkh3lNTf5Sshw5cuTIkSNHDhGAfwHofDlcaS4bAAAAAABJRU5ErkJggg=='
      />
    </Defs>
  </Svg>
);

export default SettingsIcon;
