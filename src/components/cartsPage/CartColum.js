import React from 'react'

export default function CartColum() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end single colum  */}
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        {/* end single colum  */}
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end single colum  */}
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end single colum  */}
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end single colum  */}
        {/* single colum  */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end single colum  */}
      </div>
    </div>
  )
}
