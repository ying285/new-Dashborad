"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Props {
  data: string[];
}

const UserItem: React.FC<Props> = ({ data }) => {

  console.log(data)
  const router = useRouter();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Users",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Image
              src={params.row.avatar}
              alt="user"
              width={20}
              height={20}
              className="mr-5 rounded-[20px] object-cover"
              style={{ width: "30px", height: "30px" }}
            />
            {params.row.username}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={`/Users/${params.row._id}`}>
              <button className="rounded-lg bg-[#3bb077] px-2 cursor-pointer text-[#fff]">
                Edit
              </button>
            </Link>

            <DeleteOutlineIcon
              className=" ml-2 cursor-pointer text-[red]"
              onClick={async () => {
                try {
                  const confirmed = confirm("Are you sure?");
                  if (confirmed) {
                    const res = await fetch(`/api/users?id=${params.row._id}`, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    });
                    if (res.ok) {
                      router.refresh();
                    }
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 2, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
      </div>
    </>
  );
};

export default UserItem;
