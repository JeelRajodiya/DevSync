"use client";

import { Box, Flex } from "@chakra-ui/react";
import Github from "@/public/icons/Github";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<Box
			// bg={useColorModeValue("gray.50", "gray.900")}
			bg="gray.800"
			// color={useColorModeValue("gray.700", "gray.200")}
			fontFamily={"sans-serif"}
			className={styles.main}
		>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex direction={"row"} gap={2}>
					<a href="https://github.com/Triellis" target="_blank"></a>
					<Flex
						justifyContent={"space-between"}
						alignItems={"center"}
						gap={0}
						fontSize={12}
						opacity={0.8}
						direction={"column"}
					>
						<a
							href="https://github.com/Triellis/clash-of-codes"
							target="_blank"
						>
							<Github className={styles.GHIcon} />
						</a>
						<span
							style={{
								fontFamily: "sans-serif",
								fontSize: "x-small",
							}}
						>
							©2024{" "}
						</span>
					</Flex>
				</Flex>
				<Flex direction={"column"} gap={1}>
					<span className={styles.creator}>
						Created by{" "}
						<a
							className={styles.links}
							href="https://www.linkedin.com/in/zeel-rajodiya"
							target="_blank"
							onClick={() => {}}
						>
							Zeel Rajodiya
						</a>{" "}
						|{"  "}
						<a
							className={styles.links}
							href="https://www.linkedin.com/in/sarthak-siddhpura-544389257"
							target="_blank"
						>
							Sarthak Siddhpura
						</a>
					</span>
				</Flex>
			</Flex>
		</Box>
	);
}
