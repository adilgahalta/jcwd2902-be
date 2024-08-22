/** @format */
"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  Tabs,
  TextInput,
} from "flowbite-react";
import axios from "axios";
import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
  const [branches, setBranches] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  async function fetchBranch() {
    const response = await axios.get("http://localhost:8000/branches", {
      params: {
        search,
      },
    });
    setBranches(response.data.data);
  }
  useEffect(() => {
    fetchBranch();
  }, [search]);
  return (
    <div className="m-auto max-w-screen-lg my-8">
      <Tabs>
        <Tabs.Item active title="Branch List">
          <TextInput
            onChange={(e) => setSearch(e.target.value)}
            className="my-4"
            placeholder="search branch"
          ></TextInput>

          <Table>
            <TableHead>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Branch Name</Table.HeadCell>
              <Table.HeadCell>Location</Table.HeadCell>
              <Table.HeadCell>Created At</Table.HeadCell>
              <Table.HeadCell>Updated At</Table.HeadCell>
            </TableHead>
            <Table.Body>
              {branches.map((branch, key) => (
                <Table.Row
                  key={key}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Link href={"/branches/" + branch.id}>{branch.id}</Link>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {branch.name}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {branch.location}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {new Date(branch.createdAt).toISOString().split("T")[0]}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {new Date(branch.updatedAt).toISOString().split("T")[0]}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Tabs.Item>

        <Tabs.Item active title="Branch List">
          Add/Edit Branch
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
