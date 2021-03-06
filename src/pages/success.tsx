import React from "react";
import { PageProps } from "gatsby";
import { InfoSection, PageTitle } from "../Components/Common";
import Layout from "../Components/layout";

const Success: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout pathname={location.pathname} backgroundColour="yellow">
      <InfoSection>
        <PageTitle>Order Successful</PageTitle>
        <p>
          Everything went through ok.
          <br /> Thanks for your order. <br /> You will receive an email with
          details. <br /> For enquiries contact@monitorbooks.co.uk
        </p>
      </InfoSection>
    </Layout>
  );
};
export default Success;
