export const dashboardNavItems = {
  navMain: [
    {
      title: "Store",
      url: "#",
      icon: "package",
      isActive: true,
      items: [
        {
          title: "Orders",
          url: "/store/orders",
        },
        {
          title: "Products",
          url: "/store/products",
        },
        {
          title: "Categories",
          url: "/store/categories",
        },
        {
          title: "Customers",
          url: "/store/customers",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: "product",
      isActive: false,
      items: [
        {
          title: "Manage Shop",
          url: "/settings/manage-shop",
        },
        {
          title: "Customize theme",
          url: "/settings/customize-theme",
        },
        {
          title: "Landing pages",
          url: "/settings/landing-pages",
        },
        {
          title: "Promo codes",
          url: "/settings/promo-codes",
        },
        {
          title: "Users & permissions",
          url: "/settings/permission",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: "Chart",
      isActive: false,
      items: [
        {
          title: "Analytics",
          url: "/reports/analytics",
        },
      ],
    },
    {
      title: "Payments",
      url: "#",
      icon: "CreditCard",
      isActive: false,
      items: [
        {
          title: "Billing",
          url: "/payments/billing",
        },
        {
          title: "Subscriptions",
          url: "/payments/subscriptions",
        },
      ],
    },
  ],
};
