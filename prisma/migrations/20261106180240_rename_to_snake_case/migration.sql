
-- Rename enum
ALTER TYPE "TaskStatus" RENAME TO "task_status";

-- Rename tables
ALTER TABLE "Board" RENAME TO "boards";
ALTER TABLE "Column" RENAME TO "columns";
ALTER TABLE "Task" RENAME TO "tasks";

-- Rename columns in boards
ALTER TABLE "boards"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "boards"
RENAME COLUMN "updatedAt" TO "updated_at";

-- Rename columns in columns
ALTER TABLE "columns"
RENAME COLUMN "boardId" TO "board_id";

ALTER TABLE "columns"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "columns"
RENAME COLUMN "updatedAt" TO "updated_at";

-- Rename columns in tasks
ALTER TABLE "tasks"
RENAME COLUMN "columnId" TO "column_id";

ALTER TABLE "tasks"
RENAME COLUMN "dueDate" TO "due_date";

ALTER TABLE "tasks"
RENAME COLUMN "createdAt" TO "created_at";

ALTER TABLE "tasks"
RENAME COLUMN "updatedAt" TO "updated_at";

-- Rename primary key constraints
ALTER TABLE "boards"
RENAME CONSTRAINT "Board_pkey" TO "boards_pkey";

ALTER TABLE "columns"
RENAME CONSTRAINT "Column_pkey" TO "columns_pkey";

ALTER TABLE "tasks"
RENAME CONSTRAINT "Task_pkey" TO "tasks_pkey";

-- Rename foreign key constraints
ALTER TABLE "columns"
RENAME CONSTRAINT "Column_boardId_fkey" TO "columns_board_id_fkey";

ALTER TABLE "tasks"
RENAME CONSTRAINT "Task_columnId_fkey" TO "tasks_column_id_fkey";

-- Rename indexes
ALTER INDEX "Column_boardId_position_idx"
RENAME TO "columns_board_id_position_idx";

ALTER INDEX "Task_columnId_position_idx"
RENAME TO "tasks_column_id_position_idx";
