import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from '@/app/App';
import migrations from '@/drizzle/migrations';

const useDB = () => {
    console.log("🚀 ~ useDB ~ db:", db)
    useMigrations(db, migrations);
    useDrizzleStudio(db);
}
   

export default useDB