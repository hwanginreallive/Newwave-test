import { RiseOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const listRouters = [
  {
    key: "1",
    icon: <RiseOutlined style={{ fontSize: 18 }} />,
    label: "Cài đặt",
    children: [
      {
        key: "setting_1",
        label: <Link to={"/tool/edit-bet"}>Phân tích</Link>,
      },
    ],
  },
  {
    key: "2",
    icon: <UserOutlined style={{ fontSize: 18 }} />,
    label: "Người dùng",
    children: [
      {
        key: "user_option_1",
        label: <Link to={"/users/list"}>Tài khoản người dùng</Link>,
      },
      {
        key: "user_option_2",
        label: <Link to={"/users/bet"}>Chi tiết đặt cược người dùng</Link>,
      },
    ],
  },
  {
    key: "3",
    icon: (
      <svg
        focusable="false"
        className="svg-inline--fa fa-money-bill ant-menu-item-icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        style={{
          width: 20,
        }}
      >
        <path
          fill="currentColor"
          d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"
        />
      </svg>
    ),
    label: "Tài chính",
    children: [
      {
        key: "finance_option_1",
        label: <Link to={"/tool/bank"}>Danh sách ngân hàng</Link>,
      },
      {
        key: "finance_option_2",
        label: <Link to={"/history/deposit"}>Yêu cầu nạp tiền</Link>,
      },
      {
        key: "finance_option_3",
        label: <Link to={"/history/withdraw"}>Yêu cầu rút tiền</Link>,
      },
    ],
  },
  {
    key: "4",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        className="svg-inline--fa fa-gear ant-menu-item-icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ width: 18 }}
      >
        <path
          fill="currentColor"
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
        />
      </svg>
    ),
    label: "Cấu hình",
    children: [
      {
        key: "configuration_option_1",
        label: <Link to={"/tool/setting"}>Cấu hình web</Link>,
      },
    ],
  },
  {
    key: "5",
    icon: (
      <svg
        className="svg-inline--fa fa-users ant-menu-item-icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        style={{ width: 18 }}
      >
        <path
          fill="currentColor"
          d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
        />
      </svg>
    ),
    label: "Quản trị viên",
    children: [
      {
        key: "administrator_option_1",
        label: <Link to={"/users/admin"}>Quản trị viên</Link>,
      },
      {
        key: "administrator_option_2",
        label: <Link to={"/users/role"}>Nhóm quản trị</Link>,
      },
    ],
  },
  {
    key: "6",
    icon: (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        style={{ width: 20 }}
      >
        <path
          fill="currentColor"
          d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
        />
      </svg>
    ),
    label: "Yêu cầu nạp tiền hôm nay",
    children: [
      {
        key: "request_option_1",
        label: "Tất cả",
      },
      {
        key: "request_option_2",
        label: "Chờ duyệt",
      },
      {
        key: "request_option_3",
        label: "Đã duyệt",
      },
    ],
  },
  {
    key: "7",
    icon: (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{ width: 16 }}
      >
        <path
          fill="currentColor"
          d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
        />
      </svg>
    ),
    label: "Yêu cầu rút tiền hôm nay",
    children: [
      {
        key: "request_option_4",
        label: "Tất cả",
      },
      {
        key: "request_option_5",
        label: "Chờ duyệt",
      },
      {
        key: "request_option_6",
        label: "Đã duyệt",
      },
      {
        key: "request_option_7",
        label: "Từ chối",
      },
    ],
  },
];

export const mockDataResUser = {
  success: true,
  msg: "Thao t\u00e1c th\u00e0nh c\u00f4ng",
  data: {
    id: 11881,
    status: 1,
    username: "hoaian005",
    nick_name: null,
    ref_no: "trade9904",
    wallet_password: null,
    full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
    email: "hoaian005",
    phone: "0943626873",
    identify_number: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
    front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
    back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
    gender: 1,
    link_zalo: null,
    is_admin: 2,
    birthday: null,
    home_town: null,
    identify_date: null,
    identify_place: null,
    bank_name: "TCB",
    bank_code:
      "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
    bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
    bank_number: "19034698127018",
    bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
    avatar: null,
    kyc_reason: null,
    is_marketing: null,
    is_agency: 0,
    is_verify: 0,
    media_id: null,
    role_id: null,
    address: null,
    otp: null,
    ip: "2001:ee0:5007:83d0:4561:e8eb:2182:aa92",
    otp_time: null,
    position_key: "user",
    application: null,
    created_by: null,
    last_login: "2024-09-05 20:07:39",
    created_at: "2024-09-05T12:57:37.000000Z",
    updated_at: "2024-09-05T14:08:49.000000Z",
    deleted_at: null,
    point: 85,
    game_amount: "300000.000",
    game_amount_payback: "570000.000",
    game_profit: "270000.000",
    game_win: "570000.000",
    game_loss: null,
    bill_deposit: "900000",
    bill_withdraw: "1140000",
    total_ref: 0,
    avatar_url: "http://gateway.futurestrader.trading/assets/user_default.jpg",
    bank_number_display: "19034698127018",
    front_image_url:
      "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
    back_image_url:
      "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
    link_ref: "?ref_no=trade9904",
    applications: [""],
    tokens: [
      {
        id: 6080,
        token_id: 4,
        user_id: 11881,
        type: null,
        wallet: null,
        status: null,
        pending_amount: "1740000.000000",
        amount: "600000.000000",
        created_at: "2024-09-05T13:00:28.000000Z",
        updated_at: "2024-09-05T13:57:11.000000Z",
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
      },
    ],
    user_ref: {
      id: 9781,
      created_by: 11881,
      user_id: 5116,
      type: null,
      created_at: "2024-09-05T12:57:37.000000Z",
      updated_at: "2024-09-05T12:57:37.000000Z",
      user: {
        id: 5116,
        username: "DL105",
        email: null,
        phone: null,
        ref_no: "fututrader105",
        full_name: "DL105",
        nick_name: null,
        link_zalo: null,
        avatar_url:
          "http://gateway.futurestrader.trading/assets/user_default.jpg",
        bank_number_display: null,
        front_image_url:
          "http://gateway.futurestrader.trading/assets/user_default.jpg",
        back_image_url:
          "http://gateway.futurestrader.trading/assets/user_default.jpg",
        link_ref: "?ref_no=fututrader105",
        media_id: null,
        applications: [""],
      },
    },
  },
  code: 200,
  mode: null,
  meta: null,
  errors: null,
};

export const mockDataDePosit = {
  success: true,
  msg: "Thao t\u00e1c th\u00e0nh c\u00f4ng",
  data: {
    current_page: 1,
    data: [
      {
        id: 21661,
        ref_no: "HD21640",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "complete",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: null,
        note: null,
        created_at: "2024-09-05T13:03:06.000000Z",
        updated_at: "2024-09-05T13:05:09.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
      {
        id: 21660,
        ref_no: "HD21639",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "error",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: "",
        note: null,
        created_at: "2024-09-05T13:01:53.000000Z",
        updated_at: "2024-09-05T13:05:10.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
      {
        id: 21659,
        ref_no: "HD21638",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "error",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: "",
        note: null,
        created_at: "2024-09-05T13:00:28.000000Z",
        updated_at: "2024-09-05T13:05:11.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
    ],
    first_page_url:
      "http://gateway.futurestrader.trading/api/manager/payment/list?page=1",
    from: 1,
    last_page: 1,
    last_page_url:
      "http://gateway.futurestrader.trading/api/manager/payment/list?page=1",
    next_page_url: null,
    path: "http://gateway.futurestrader.trading/api/manager/payment/list",
    per_page: "10",
    prev_page_url: null,
    to: 3,
    total: 3,
  },
  code: 200,
  mode: null,
  meta: null,
  errors: null,
  summary: [
    {
      name: null,
      type: "commission",
      amount: "60000.000000",
      total: 2,
    },
    {
      name: "N\u1ea1p ti\u1ec1n",
      type: "deposit",
      amount: "5000000044672558608.000000",
      total: 5626,
    },
    {
      name: "H\u1ec7 th\u1ed1ng",
      type: "system",
      amount: "21230068575919464287275.000000",
      total: 2019,
    },
    {
      name: "R\u00fat ti\u1ec1n",
      type: "withdraw",
      amount: "88743603086.000000",
      total: 4949,
    },
    {
      name: null,
      type: null,
      amount: "0.000000",
      total: 2,
    },
    {
      name: "V\u00ed \u0111i\u1ec7n t\u1eed",
      type: "vnd",
      amount: "1006555555.000000",
      total: 2,
    },
    {
      name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
      type: "game",
      amount: "36163072644180727.642998",
      total: 5180,
    },
    {
      name: "N\u1ea1p ti\u1ec1n h\u00f4m nay",
      type: "deposit_today",
      amount: "195782134.000000",
      total: 19,
    },
    {
      name: "H\u1ec7 th\u1ed1ng h\u00f4m nay",
      type: "system_today",
      amount: "360257904.000000",
      total: 14,
    },
    {
      name: "R\u00fat ti\u1ec1n h\u00f4m nay",
      type: "withdraw_today",
      amount: "5390000.000000",
      total: 13,
    },
    {
      name: null,
      type: "complete",
      amount: "5000000044672558608.000000",
      total: 5626,
    },
    {
      name: null,
      type: "error",
      amount: "6924295639.000000",
      total: 912,
    },
    {
      name: null,
      type: "pending",
      amount: "459594375674.000000",
      total: 1755,
    },
  ],
};

export const mockDataWithDraw = {
  success: true,
  msg: "Thao t\u00e1c th\u00e0nh c\u00f4ng",
  data: {
    current_page: 1,
    data: [
      {
        id: 21661,
        ref_no: "HD21640",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "complete",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: null,
        note: null,
        created_at: "2024-09-05T13:03:06.000000Z",
        updated_at: "2024-09-05T13:05:09.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
      {
        id: 21660,
        ref_no: "HD21639",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "error",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: "",
        note: null,
        created_at: "2024-09-05T13:01:53.000000Z",
        updated_at: "2024-09-05T13:05:10.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
      {
        id: 21659,
        ref_no: "HD21638",
        sender_id: 11881,
        receiver_id: 11881,
        object_id: null,
        receiver_balance: "0",
        sender_balance: "0",
        fee: "0",
        amount: "300000",
        final_total: "300000",
        type: "deposit",
        token_id: 4,
        transfer_token: null,
        method: "user",
        status: "error",
        read_status: "un_read",
        is_action: 1,
        content: "N\u1ea1p ti\u1ec1n v\u00e0o t\u00e0i kho\u1ea3n",
        reason: "",
        note: null,
        created_at: "2024-09-05T13:00:28.000000Z",
        updated_at: "2024-09-05T13:05:11.000000Z",
        sender: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          front_image: "/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image: "/assets/upload/kyc/1725543827_1000002827.jpg",
          bank_code:
            "Ng\u00e2n h\u00e0ng TMCP K\u1ef9 Th\u01b0\u01a1ng Vi\u1ec7t Nam (Techcombank)",
          bank_name: "TCB",
          bank_number: "19034698127018",
          bank_owner: "D\u01b0\u01a1ng Ho\u00e0i \u00c2n",
          bank_branch: "Techcombank chi nh\u00e1nh qu\u1eadn 5",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: "19034698127018",
          front_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543826_1000002826.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/upload/kyc/1725543827_1000002827.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
          user_ref: {
            id: 9781,
            created_by: 11881,
            user_id: 5116,
            type: null,
            created_at: "2024-09-05T12:57:37.000000Z",
            updated_at: "2024-09-05T12:57:37.000000Z",
            user: {
              id: 5116,
              username: "DL105",
              email: null,
              phone: null,
              ref_no: "fututrader105",
              full_name: "DL105",
              nick_name: null,
              link_zalo: null,
              avatar_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              bank_number_display: null,
              front_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              back_image_url:
                "http://gateway.futurestrader.trading/assets/user_default.jpg",
              link_ref: "?ref_no=fututrader105",
              media_id: null,
              applications: [""],
            },
          },
        },
        receiver: {
          id: 11881,
          username: "hoaian005",
          full_name: "D\u01af\u01a0NG HO\u00c0I \u00c2N",
          phone: "0943626873",
          email: "hoaian005",
          avatar_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          bank_number_display: null,
          front_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          back_image_url:
            "http://gateway.futurestrader.trading/assets/user_default.jpg",
          link_ref: "?ref_no=",
          media_id: null,
          applications: [""],
        },
        token: {
          id: 4,
          name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
          symbol: "game",
          network_name: "BEP20",
          new_rpc_url: null,
          icon: "",
          chain_id: null,
          block_explorer_url: null,
          contract_address: null,
          price: "1.000000",
          fee: "1.000000",
          order: 1,
          status: "active",
          description: null,
          created_by: 1,
          created_at: "2022-05-31T23:45:49.000000Z",
          updated_at: "2022-07-11T21:59:50.000000Z",
        },
        transfer: null,
      },
    ],
    first_page_url:
      "http://gateway.futurestrader.trading/api/manager/payment/list?page=1",
    from: 1,
    last_page: 1,
    last_page_url:
      "http://gateway.futurestrader.trading/api/manager/payment/list?page=1",
    next_page_url: null,
    path: "http://gateway.futurestrader.trading/api/manager/payment/list",
    per_page: "10",
    prev_page_url: null,
    to: 3,
    total: 3,
  },
  code: 200,
  mode: null,
  meta: null,
  errors: null,
  summary: [
    {
      name: null,
      type: "commission",
      amount: "60000.000000",
      total: 2,
    },
    {
      name: "N\u1ea1p ti\u1ec1n",
      type: "deposit",
      amount: "5000000044673158608.000000",
      total: 5628,
    },
    {
      name: "H\u1ec7 th\u1ed1ng",
      type: "system",
      amount: "21230068575919464887275.000000",
      total: 2021,
    },
    {
      name: "R\u00fat ti\u1ec1n",
      type: "withdraw",
      amount: "88743603086.000000",
      total: 4949,
    },
    {
      name: null,
      type: null,
      amount: "0.000000",
      total: 2,
    },
    {
      name: "V\u00ed \u0111i\u1ec7n t\u1eed",
      type: "vnd",
      amount: "1006555555.000000",
      total: 2,
    },
    {
      name: "Tr\u00e1i phi\u1ebfu \u0111i\u1ec7n t\u1eed",
      type: "game",
      amount: "36163072645210727.642998",
      total: 5182,
    },
    {
      name: "N\u1ea1p ti\u1ec1n h\u00f4m nay",
      type: "deposit_today",
      amount: "196382134.000000",
      total: 21,
    },
    {
      name: "H\u1ec7 th\u1ed1ng h\u00f4m nay",
      type: "system_today",
      amount: "360857904.000000",
      total: 16,
    },
    {
      name: "R\u00fat ti\u1ec1n h\u00f4m nay",
      type: "withdraw_today",
      amount: "5390000.000000",
      total: 13,
    },
    {
      name: null,
      type: "complete",
      amount: "5000000044673158608.000000",
      total: 5628,
    },
    {
      name: null,
      type: "error",
      amount: "6924295639.000000",
      total: 912,
    },
    {
      name: null,
      type: "pending",
      amount: "459594975674.000000",
      total: 1758,
    },
  ],
};
