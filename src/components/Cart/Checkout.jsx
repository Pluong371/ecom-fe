import React, { useRef, useState } from "react";
import { CheckoutIcon } from "../../assets/icon";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { EditIcon } from "../../assets/icon";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import Image from "../UI/Image";
import { InputNumber } from "antd";
import { VoucherIcon } from "../../assets/icon";
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/cartSlice";
const Checkout = ({ setStep }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const { t } = useTranslation();
  const dataUsers = [
    {
      contactInformation: {
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "+1 555-123-4567",
        emailAddress: "john.doe@example.com",
      },
      shippingAddress: {
        streetAddress: "123 Elm Street",
        country: "United States",
        city: "Springfield",
      },
    },
    {
      contactInformation: {
        firstName: "Jane",
        lastName: "Smith",
        phoneNumber: "+44 20 7946 0958",
        emailAddress: "jane.smith@example.co.uk",
      },
      shippingAddress: {
        streetAddress: "456 Oak Avenue",
        country: "United Kingdom",
        city: "London",
      },
    },
    {
      contactInformation: {
        firstName: "Carlos",
        lastName: "Garcia",
        phoneNumber: "+34 91 123 4567",
        emailAddress: "carlos.garcia@example.es",
      },
      shippingAddress: {
        streetAddress: "789 Pine Road",
        country: "Spain",
        city: "Madrid",
      },
    },
    {
      contactInformation: {
        firstName: "dsadsa",
        lastName: "Smidsadsath",
        phoneNumber: "+44 20 7946 0958",
        emailAddress: "jane.smith@example.co.uk",
      },
      shippingAddress: {
        streetAddress: "456 Oak Avenue",
        country: "United Kingdom",
        city: "London",
      },
    },
  ];

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  

  const handleChange = (event) => {
    const { name, value } = event.target; //name và value nhận từ Input khi onchange xong set lại giá trị theo từng trường còn nếu không dùng switch thì sẽ phải viết theo từng hàm xong gọi, nếu viết full không dùng case thì sẽ chỉ nhận sự thay đổi mà k thể sửa
    switch (name) {
      case "first_name":
        setFirstName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "street_address":
        setStreetAddress(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "city":
        setCity(value);
        break;
      default:
        break;
    }
  };
 
  const [edit, setEdit] = useState(false);
  const handleEdit = (event,index) => {
    event.stopPropagation(); //dừng sự kiện click bên ngoài
    setLastName(dataUsers[index].contactInformation.lastName);
    setFirstName(dataUsers[index].contactInformation.firstName);
    setPhone(dataUsers[index].contactInformation.phoneNumber);
    setEmail(dataUsers[index].contactInformation.emailAddress);
    setStreetAddress(dataUsers[index].shippingAddress.streetAddress);
    setCountry(dataUsers[index].shippingAddress.country);
    setCity(dataUsers[index].shippingAddress.city);

    setEdit(true);
    
  };
  const [add, setAdd] = useState(false);
  const handleAdd = () => {
    setAdd(true);
    setLastName("");
    setFirstName("");
    setPhone("");
    setEmail("");
    setStreetAddress("");
    setCountry("");
    setCity("");
  };
  const handleCancel = () => {
    setAdd(false);
  };
  const handleCancelEdit = () => {
    setEdit(false);
  };
  const [modalText, setModalText] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setEdit(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const Total = cart.total + cart.shippingPrice - cart.discount;
    const [selectedAddress, setSelectedAddress] = useState(null);
const[ClickAddress,setClickAddress] = useState()
  const handleAddressSelect = (index) => {
    setClickAddress(index)
    setSelectedAddress(dataUsers[index]);
  
      dispatch(
        updateCart({
          address: dataUsers[index],
        })
      );
    
  };
  const handlePlaceOrder = () => {
    setStep(3)
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    console.log(formattedDate);
    dispatch(
      updateCart({
        date: formattedDate,
      })
    );
  }


  return (
    <div className="flex w-full flex-col">
      <h1 className="text-5xl font-semibold mb-6 justify-center flex">
        Check Out
      </h1>

      <div className=" w-full flex justify-center mb-10">
        <div className="grid grid-cols-3 w-3/5 gap-8">
          <div
            onClick={() => setStep(1)}
            className="flex border-b-2 group border-green-400 pb-3 hover:cursor-pointer"
          >
            <span className="bg-green-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              <CheckoutIcon data />
            </span>
            <span className="mx-4 my-1 text-green-400 text-lg">
              Shopping cart
            </span>
          </div>
          <div className="flex border-b-2 border-black pb-3">
            <span className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              2
            </span>
            <span className="mx-4 my-1 text-lg">Checkout details</span>
          </div>
          <div className="flex text-gray-600">
            <span className="rounded-full w-10 h-10 flex items-center justify-center text-lg">
              3
            </span>
            <span className="my-1 text-lg">Order complete</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <div className="w-2/3 grid grid-cols-2 gap-4">
          {dataUsers.map((user, index) => (
            <div
              key={index}
              className={`border-2 rounded-md p-4 mb-4 ${
                ClickAddress === index ? "bg-blue-100" : "bg-white"
              }`}
              onClick={() => handleAddressSelect(index)}
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-2">
                  {user.contactInformation.firstName}{" "}
                  {user.contactInformation.lastName}
                </h2>
                <button
                  onClick={(event) => handleEdit(event, index)}
                  className="flex p-2 items-center gap-2"
                >
                  {" "}
                  <EditIcon />
                  <span>Edit</span>
                </button>
              </div>
              <p>
                <strong>Phone:</strong> {user.contactInformation.phoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {user.shippingAddress.streetAddress},{" "}
                {user.shippingAddress.city}, {user.shippingAddress.country}
              </p>
            </div>
          ))}
          <Modal
            title="Edit Address"
            open={edit}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancelEdit}
            style={{
              top: 20,
            }}
          >
            {confirmLoading ? (
              <p>{modalText}</p>
            ) : (
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="border-2 border-gray-300 rounded-md p-4 ">
                  <h1 className="text-xl uppercase font-bold mb-2">
                    {t("contact_information")}
                  </h1>
                  <div className="mx-10 flex flex-col my-4">
                    <div className="flex w-full flex-col">
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col ">
                          <label className="w-full my-2 uppercase text-gray-400">
                            {t("first_name")}
                          </label>
                          <Input
                            type="text"
                            name="first_name"
                            value={firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="w-full my-2 uppercase text-gray-400">
                            {t("last_name")}
                          </label>
                          {/* <Input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={lastName}
                            onChange={handleChange}
                            register={register}
                            errors={errors}
                            placeholder={t("last_name")}
                          /> */}

                          <Input
                            id="last_name"
                            name="last_name"
                            value={lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("phone")}
                    </label>
                    {/* <Input
                      type="text"
                      id="phone"
                      name="phone"
                      defaultValue={currentUser.contactInformation.phoneNumber}
                      register={register}
                      errors={errors}
                      placeholder={t("phone")}
                    /> */}
                    <Input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />

                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("email_address")}
                    </label>
                    {/* <Input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={currentUser.contactInformation.emailAddress}
                      register={register}
                      errors={errors}
                      placeholder={t("email_address")}
                    /> */}
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>

                  <h1 className="text-xl uppercase font-bold mb-2">
                    {t("shipping_address")}
                  </h1>
                  <div className="mx-10 flex flex-col  my-4">
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("street_address")}*
                    </label>
                    {/* <Input
                      type="text"
                      id="street_address"
                      name="street_address"
                      defaultValue={currentUser.shippingAddress.streetAddress}
                      register={register}
                      errors={errors}
                      placeholder={t("street_address")}
                    /> */}
                    <Input
                      type="text"
                      id="street_address"
                      name="street_address"
                      value={streetAddress}
                      onChange={handleChange}
                      placeholder={t("street_address")}
                    />
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("country")}*
                    </label>
                    <Input
                      type="text"
                      id="country"
                      name="country"
                      // defaultValue={currentUser.shippingAddress.country}
                      // register={register}
                      // errors={errors}
                      value={country}
                      placeholder={t("country")}
                      onChange={handleChange}
                    />
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("city")}*
                    </label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={city}
                      // value={currentUser.shippingAddress.city}
                      // // defaultValue={currentUser.shippingAddress.city}
                      // register={register}
                      // errors={errors}
                      onChange={handleChange}
                      placeholder={t("city")}
                    />
                  </div>
                </div>
              </form>
            )}
          </Modal>
          <button
            onClick={handleAdd}
            className="border-2 border-gray-300 rounded-md p-6 mb-4"
          >
            Add new address
          </button>
          <Modal
            title="Add new address"
            open={add}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            style={{
              top: 20,
            }}
          >
            {confirmLoading ? (
              <p>{modalText}</p>
            ) : (
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="border-2 border-gray-300 rounded-md p-4 ">
                  <h1 className="text-xl uppercase font-bold mb-2">
                    {t("contact_information")}
                  </h1>
                  <div className="mx-10 flex flex-col my-4">
                    <div className="flex w-full flex-col">
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col ">
                          <label className="w-full my-2 uppercase text-gray-400">
                            {t("first_name")}
                          </label>
                          <Input
                            type="text"
                            name="first_name"
                            value={firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="w-full my-2 uppercase text-gray-400">
                            {t("last_name")}
                          </label>
                          {/* <Input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={lastName}
                            onChange={handleChange}
                            register={register}
                            errors={errors}
                            placeholder={t("last_name")}
                          /> */}

                          <Input
                            id="last_name"
                            name="last_name"
                            value={lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("phone")}
                    </label>
                    {/* <Input
                      type="text"
                      id="phone"
                      name="phone"
                      defaultValue={currentUser.contactInformation.phoneNumber}
                      register={register}
                      errors={errors}
                      placeholder={t("phone")}
                    /> */}
                    <Input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />

                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("email_address")}
                    </label>
                    {/* <Input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={currentUser.contactInformation.emailAddress}
                      register={register}
                      errors={errors}
                      placeholder={t("email_address")}
                    /> */}
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>

                  <h1 className="text-xl uppercase font-bold mb-2">
                    {t("shipping_address")}
                  </h1>
                  <div className="mx-10 flex flex-col  my-4">
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("street_address")}*
                    </label>
                    {/* <Input
                      type="text"
                      id="street_address"
                      name="street_address"
                      defaultValue={currentUser.shippingAddress.streetAddress}
                      register={register}
                      errors={errors}
                      placeholder={t("street_address")}
                    /> */}
                    <Input
                      type="text"
                      id="street_address"
                      name="street_address"
                      value={streetAddress}
                      onChange={handleChange}
                      placeholder={t("street_address")}
                    />
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("country")}*
                    </label>
                    <Input
                      type="text"
                      id="country"
                      name="country"
                      // defaultValue={currentUser.shippingAddress.country}
                      // register={register}
                      // errors={errors}
                      value={country}
                      placeholder={t("country")}
                      onChange={handleChange}
                    />
                    <label className="w-full my-2 uppercase text-gray-400">
                      {t("city")}*
                    </label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={city}
                      // value={currentUser.shippingAddress.city}
                      // // defaultValue={currentUser.shippingAddress.city}
                      // register={register}
                      // errors={errors}
                      onChange={handleChange}
                      placeholder={t("city")}
                    />
                  </div>
                </div>
              </form>
            )}
          </Modal>
        </div>

        <div className="w-1/3 border-2 border-gray-300 rounded-md p-4 h-fit">
          <h1>Order Summary</h1>
          <div className="flex flex-col mx-2 my-2">
            {cart.items.map((product) => {
              return (
                <div
                  key={product.id}
                  className="text-left flex border-b border-gray-200 py-3 "
                >
                  <div className="flex gap-2 w-3/4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-20"
                    />
                    <div className="flex flex-col justify-between">
                      <div className="text-sm">{product.name}</div>
                      <div className="text-gray-500 text-sm">color: Red</div>

                      <InputNumber
                        readOnly
                        value={product.quantity}
                        style={{
                          width: "80px",
                          height: "30px",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-1/4 text-right">{product.price}</div>
                </div>
              );
            })}
          </div>
          {cart.discount !== 0 && (
            <div className="flex justify-between text-lg mt-4 p-2 border-b border-gray-200 mx-2">
              <div className="flex gap-2 items-center">
                <VoucherIcon /> <span>{cart.couponCode}</span>
              </div>
              <div className="text-green-500 font-medium">
                -${cart.discount.toFixed(2)}
              </div>
            </div>
          )}
          <div className="flex justify-between text-lg mt-4 p-2 border-b border-gray-200 mx-2">
            <div className="flex gap-2 items-center">Shipping</div>
            <div className="text-green-500 font-medium">
              {cart.shippingPrice === 0 ? (
                <span>Free</span>
              ) : (
                <span>+${cart.shippingPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          <div className="flex justify-between text-lg mt-4 p-2 border-b border-gray-200 mx-2">
            <div className="flex gap-2 items-center">Subtotal</div>
            <div className="text-green-500 font-medium">
              <span>+${cart.total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between text-lg mt-4 p-2 mx-2">
            <div className="flex gap-2 items-center">Total</div>
            <div className="text-green-500 font-medium">
              <span>+${Total.toFixed(2)}</span>
            </div>
          </div>
          <div>
            <button
              onClick={handlePlaceOrder}
              className={`bg-black w-full text-white p-2 mt-5 rounded-md ${
                selectedAddress === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={selectedAddress === null}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
