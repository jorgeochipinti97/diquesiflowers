// carritoStore.js

import { create } from "zustand";

const useCartStore = create((set) => ({
  productos: [],
  agregarProducto: (productoNuevo) =>
    set((state) => {
      const productoExistente = state.productos.find(
        (producto) =>
          producto.title === productoNuevo.title 
      );
      if (productoExistente) {
        return {
          productos: state.productos.map((producto) =>
            producto.title === productoNuevo.title 
              ? { ...producto, quantity: producto.quantity + 1 }
              : producto
          ),
        };
      } else {
        return {
          productos: [...state.productos, { ...productoNuevo, quantity: 1 }],
        };
      }
    }),
  removerProducto: (titleProducto) =>
    set((state) => ({
      productos: state.productos.filter(
        (producto) => producto.title !== titleProducto
      ),
    })),
  decrementarCantidad: (titleProducto) =>
    set((state) => ({
      productos: state.productos
        .map((producto) =>
          producto.title === titleProducto &&
          producto.quantity > 1
            ? { ...producto, quantity: producto.quantity - 1 }
            : producto
        )
        .filter((producto) => producto.quantity > 0),
    })),
  incrementarCantidad: (titleProducto) =>
    set((state) => ({
      productos: state.productos.map((producto) =>
        producto.title === titleProducto 
          ? { ...producto, quantity: producto.quantity + 1 }
          : producto
      ),
    })),
  limpiarCarrito: () => set(() => ({ productos: [] })),
  cantidadTotal: () =>
    set((state) => ({
      total: state.productos.reduce(
        (acc, producto) => acc + producto.quantity,
        0
      ),
    })),
  totalPrecios: () =>
    set((state) => ({
      totalPrecio: state.productos.reduce(
        (acc, producto) => acc + producto.quantity * producto.price,
        0
      ),
    })),
}));

export default useCartStore;
