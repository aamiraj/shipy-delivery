import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="my-8 px-4">
      <h1 className="font-bold text-2xl text-center">
        Some concepts you need to know
      </h1>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          Difference between SQL and NoSQL
        </h2>
        <p>
          SQL databases are primarily called as Relational Databases (RDBMS);
          whereas NoSQL database are primarily called as non-relational or
          distributed database. SQL databases have fixed or static or predefined
          schema. But NoSQL have dynamic schema. SQL databases are not suited
          for hierarchical data storage. But NoSQL databases are best suited for
          hierarchical data storage. SQL databases are best suited for complex
          queries. Onthe other hand, NoSQL databases are not so good for complex
          queries. MySQL, PostgreSQL, Oracle, MS-SQL Server etc. are SQL
          databases, and MongoDB, GraphQL, HBase, Neo4j, Cassandra etc. are the
          NoSQL daabases.
        </p>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          What is JWT, and how does it work?
        </h2>
        <p>
          JWT, or JSON Web Token, is an open standard used to share information
          between two parties securely — a client and a server. In most cases,
          it's an encoded JSON containing a set of claims and a signature. JWT
          authentication is a token-based stateless authentication mechanism. It
          is popularly used as a client-side-based stateless session, this means
          the server doesn't have to completely rely on a data store (or)
          database to save session information. Basically the identity
          provider(IdP) generates a JWT certifying user identity and Resource
          server decodes and verifies the authenticity of the token using secret
          salt / public key.
        </p>
        <ul className="list-disc p-8">
          <li>User sign-in using username and password or google/facebook.</li>
          <li>
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key.
          </li>
          <li>
            User's Client uses the JWT to access protected resources by passing
            the JWT in HTTP Authorization header.
          </li>
          <li>
            esource server then verifies the authenticity of the token using the
            secret salt/ public key.
          </li>
        </ul>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          What is the difference between javascript and NodeJS?
        </h2>
        <p>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.
        </p>
        <p>
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p>
      </div>
      <div className="my-4 py-2">
        <h2 className="font-bold text-lg text-center">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded.
        </p>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
