# DNR-Product-Card

This is a test deployment package to npm

## Examples

```js
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'DNR-Product-Card'

<ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    >
      {
        () => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
</ProductCard>
```