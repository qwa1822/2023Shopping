# React + Vite
## 사용언어는 ?
> React, TypeScript

<a href="shopping-a7cad.web.app"/>


### 장바구니 추가
```react


export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        item => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      } else {
        state.productData.push({ ...action.payload, quantity: 1 });
      }
    }


```

### 장바구니 삭제
```react
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        item => item.id !== action.payload.id
      );
    },
  ```

### 장바구니 초기화

    resetCart: state => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      let findIdx = state.productData.find(
        item => item.id === action.payload.id
      );
      if (findIdx) {
        findIdx.quantity++;
      }
    }


### 수량 증가
    decrementQuantity: (state, action) => {
      let findIdx = state.productData.find(
        item => item.id === action.payload.id
      );
      if (findIdx.quantity == 1) {
        findIdx.quantity = 1;
      } else {
        findIdx.quantity--;
      }
    },


### 유저추가
```react
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: state => {
      state.userInfo = null;
    },
  },
});
```

```
