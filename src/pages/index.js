import React from "react";
import { Col, Row } from "react-bootstrap";

import landing from "../images/landing.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Social from "../components/Social";

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Row className="align-items-center" as="section">
        <Col md={6} className="my-2">
          <img
            src={landing}
            alt="A man looking out of a window"
            draggable={false}
          />
        </Col>
        <Col md={6} className="my-2">
          <h1>Kyle Huang Junyuan</h1>
          <p>Computer Science Undergraduate</p>
          <Social />
        </Col>
      </Row>
    </Layout>
  );
};

// const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc. Duis ultricies lacus sed turpis tincidunt id. Eu lobortis elementum nibh tellus molestie nunc. Et malesuada fames ac turpis. Pharetra pharetra massa massa ultricies mi quis. Scelerisque varius morbi enim nunc. Orci a scelerisque purus semper eget duis at. Dictum varius duis at consectetur lorem. In hac habitasse platea dictumst quisque sagittis. Adipiscing tristique risus nec feugiat. Et egestas quis ipsum suspendisse ultrices gravida. Libero id faucibus nisl tincidunt eget nullam non.

// Odio pellentesque diam volutpat commodo sed egestas egestas. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Amet dictum sit amet justo donec enim diam. Nunc non blandit massa enim nec dui nunc mattis. Quis ipsum suspendisse ultrices gravida dictum fusce. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Eget magna fermentum iaculis eu non. Vivamus at augue eget arcu dictum varius duis at. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Parturient montes nascetur ridiculus mus mauris vitae. Nullam ac tortor vitae purus faucibus ornare. Nunc sed augue lacus viverra. Ultricies mi quis hendrerit dolor magna eget est. Et malesuada fames ac turpis egestas integer eget aliquet. Vivamus arcu felis bibendum ut. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.

// Erat nam at lectus urna duis convallis convallis. Ornare quam viverra orci sagittis eu volutpat odio. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque sit amet porttitor eget. Bibendum est ultricies integer quis auctor elit. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Viverra tellus in hac habitasse platea. Mauris sit amet massa vitae. Pellentesque habitant morbi tristique senectus et netus. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis. Aliquet nibh praesent tristique magna sit amet purus gravida. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim sit amet venenatis urna cursus eget. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Praesent tristique magna sit amet.

// Felis bibendum ut tristique et egestas quis ipsum. Non diam phasellus vestibulum lorem sed risus. Quam id leo in vitae turpis massa sed elementum tempus. Velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Malesuada proin libero nunc consequat interdum varius sit amet. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut porttitor leo a diam sollicitudin tempor. Massa massa ultricies mi quis hendrerit dolor magna eget. Ac orci phasellus egestas tellus rutrum.

// Nisl vel pretium lectus quam id leo in vitae turpis. Eget duis at tellus at urna condimentum mattis pellentesque id. Suscipit adipiscing bibendum est ultricies integer quis auctor. Consequat id porta nibh venenatis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet aliquam id diam maecenas ultricies mi eget mauris. Cras sed felis eget velit aliquet sagittis id. Urna neque viverra justo nec ultrices dui sapien. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Id leo in vitae turpis massa sed. Velit egestas dui id ornare arcu odio. Vitae suscipit tellus mauris a diam maecenas sed. Bibendum arcu vitae elementum curabitur. Consequat semper viverra nam libero justo laoreet sit amet. Ut sem viverra aliquet eget sit amet tellus.`;
