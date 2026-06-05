// 项目详情数据
const projectDetails = {
    1: {
        title: '自动化装船机系统',
        description: '面向港口散货装载场景的自动化系统，集成智能感知、路径规划、运动控制与设备协同。',
        tags: ['ROS 2', 'C++', '点云感知', '运动规划'],
        details: '项目面向散货码头装船场景，构建了由雷达、3D 激光雷达、RTK-GNSS 和 PLC 等设备组成的 ROS 2 系统。我负责项目核心算法与系统集成，覆盖传感器驱动和融合、船舶舱口识别、物料分布分析、装船机位姿与轨迹规划、运动控制、碰撞检测和异常监控。系统采用模块化节点设计，通过自定义消息连接感知、规划、控制和设备接口。',
        technologies: [
            { name: 'ROS 2', icon: 'fas fa-project-diagram' },
            { name: 'C++', icon: 'fas fa-code' },
            { name: 'PCL / OctoMap', icon: 'fas fa-cubes' },
            { name: 'LiDAR / Radar', icon: 'fas fa-satellite-dish' },
            { name: 'RTK-GNSS', icon: 'fas fa-location-arrow' },
            { name: 'PLC / Modbus', icon: 'fas fa-industry' }
        ],
        features: [
            { title: '舱口自动识别', description: '利用 3D 点云与扫描线密度统计识别散货船舱口，并输出精确三维位置' },
            { title: '多传感器融合', description: '融合激光雷达、毫米波雷达和 GNSS 数据，形成统一环境与设备状态表达' },
            { title: '规划与控制', description: '结合三维路径规划和运动控制，实现装船机多自由度协同作业' },
            { title: '主动安全', description: '通过体素地图、碰撞检测和异常监控保障自动化作业安全' },
            { title: '设备集成', description: '对接雷达、GNSS、PLC 等工业设备，打通算法与现场执行链路' }
        ]
    },
    2: {
        title: '雷达自动标定工具',
        description: '基于 Flask 的雷达-GNSS 自动标定 Web 工具，将坐标解析、坐标系转换、参数求解和误差评估整合为可视化流程。',
        tags: ['Python', 'Flask', 'NumPy', '坐标变换'],
        liveUrl: 'https://calibration-tool-ca9q.onrender.com',
        liveLabel: '在线体验',
        details: '该工具用于装船机传感器标定。用户可以上传 CSV 或 TXT 格式的 GNSS 与雷达坐标，输入装船机回转、俯仰和臂架参数，自动求解雷达到目标坐标系的刚体变换矩阵并分析逐点误差。工具还提供泊位坐标系建立和大机姿态标定功能，支持从经纬度数据完成 WGS84 到局部坐标系转换，并通过回转与俯仰轨迹估计设备旋转中心。',
        technologies: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'Flask', icon: 'fas fa-server' },
            { name: 'NumPy', icon: 'fas fa-calculator' },
            { name: 'Pandas', icon: 'fas fa-table' },
            { name: 'Pytest', icon: 'fas fa-vial' }
        ],
        features: [
            { title: '自动标定', description: '使用 SVD 求解最优旋转和平移参数，输出 4x4 齐次变换矩阵' },
            { title: '多坐标系支持', description: '支持旋转中心、臂架和溜筒坐标系，以及 WGS84 到泊位坐标系转换' },
            { title: '姿态参数估计', description: '通过二维和三维圆拟合计算装船机回转中心与俯仰中心' },
            { title: '误差分析', description: '计算逐点欧氏距离误差，并汇总平均误差和最大误差' },
            { title: '自动化测试', description: '覆盖坐标解析、变换求解、姿态计算和完整标定流程' }
        ]
    },
    3: {
        title: '工作日志管理工具',
        description: '一款用于记录每日工作、回顾历史内容并同步 GitHub 的跨平台桌面应用，让日常工作沉淀更轻量、更连续。',
        tags: ['React', 'TypeScript', 'Tauri', 'GitHub API'],
        details: '该工具使用 React 和 TypeScript 构建界面，以 Tauri 封装为跨平台桌面应用。用户配置 GitHub Token 和目标仓库后，可以记录今日工作与明日计划，并将日志自动上传到仓库。应用支持最近 7 天或 30 天的历史查询、已有日志编辑与删除，以及选定时间范围内的工作内容总结。',
        technologies: [
            { name: 'React 18', icon: 'fab fa-react' },
            { name: 'TypeScript', icon: 'fas fa-code' },
            { name: 'Tauri 2', icon: 'fas fa-desktop' },
            { name: 'Ant Design', icon: 'fas fa-palette' },
            { name: 'Zustand', icon: 'fas fa-database' },
            { name: 'GitHub API', icon: 'fab fa-github' }
        ],
        screenshots: [
            {
                src: 'assets/work-log-manager/configuration.png',
                alt: '工作日志管理工具 GitHub 配置页面',
                title: 'GitHub 配置',
                description: '配置 Personal Access Token 和日志仓库，首次使用时即可完成同步环境初始化。'
            },
            {
                src: 'assets/work-log-manager/log-editor.png',
                alt: '工作日志管理工具日志编辑页面',
                title: '日志编辑',
                description: '按日期记录今日工作与明日计划，支持多行内容输入和日志上传。'
            },
            {
                src: 'assets/work-log-manager/history.png',
                alt: '工作日志管理工具历史记录页面',
                title: '历史记录',
                description: '查看指定时间范围内的日志，并提供编辑、删除和工作总结功能。'
            }
        ],
        features: [
            { title: '每日记录', description: '按日期记录今日工作和明日计划，自动生成清晰的日志结构' },
            { title: 'GitHub 同步', description: '通过 GitHub API 自动创建仓库并上传日志，便于版本化保存' },
            { title: '历史管理', description: '查看最近 7 天或 30 天日志，并支持编辑和删除已有内容' },
            { title: '工作总结', description: '基于选定时间范围汇总日志内容，辅助周报和阶段复盘' },
            { title: '跨平台体验', description: '使用 Tauri 提供轻量的 Windows、macOS 和 Linux 桌面体验' }
        ]
    },
    4: {
        title: '4D 点云车道线检测',
        description: '面向全天候自动驾驶场景，从连续 4D 激光点云中提取车道线实例，并恢复可用于定位和规划的连续道路几何结构。',
        tags: ['Python', 'PyTorch', 'K-Lane', 'Open3D'],
        details: '项目将 10 Hz 连续点云按雷达 ego-pose 拆分为单帧数据，再投影至 BEV 平面并栅格化，以高度和反射强度构建训练样本。模型完成车道线实例分割后，通过聚类、排序与曲线拟合将离散预测恢复为连续车道线。最终结果在长直道、多车道及汇入结构、弯道等场景中进行三维点云可视化，并结合相机画面核对检测结果与真实道路结构的一致性。',
        technologies: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'PyTorch', icon: 'fas fa-brain' },
            { name: 'K-Lane', icon: 'fas fa-road' },
            { name: 'Open3D', icon: 'fas fa-cubes' },
            { name: 'OpenCV', icon: 'fas fa-eye' }
        ],
        galleryTitle: '检测成果',
        screenshots: [
            {
                src: 'assets/lane-detection/multi-lane.png',
                alt: '4D 点云多车道场景检测结果',
                title: '多车道结构检测',
                description: '在道路结构较复杂的多车道场景中区分车道线实例，并保持横向车道拓扑关系。'
            },
            {
                src: 'assets/lane-detection/long-range-road.png',
                alt: '4D 点云长距离道路车道线检测结果',
                title: '长距离连续检测',
                description: '在大范围点云中恢复连续车道线，并与右上角同步相机画面中的真实道路结构对应。'
            },
            {
                src: 'assets/lane-detection/curved-road.png',
                alt: '4D 点云弯道车道线检测结果',
                title: '弯道曲线检测',
                description: '在道路曲率明显变化的场景中保持车道线连续性，同时输出中心采样点作为轨迹参考。'
            }
        ],
        features: [
            { title: '4D 数据处理', description: '基于 ego-pose 将连续时空点云拆分并对齐为可训练的单帧样本' },
            { title: 'BEV 特征构建', description: '将高度与反射强度编码为栅格图像通道，保留车道线几何和强度特征' },
            { title: '实例分割', description: '使用 K-Lane 完成点云车道线检测与实例级区分' },
            { title: '连续曲线恢复', description: '对离散预测点进行聚类、排序和拟合，输出连续且具有实例区分的车道线' },
            { title: '复杂场景适应', description: '在长直道、多车道、道路汇入和弯道场景中保持对道路几何结构的连续表达' },
            { title: '多模态结果核验', description: '将三维点云检测结果与同步相机画面对应展示，便于核对车道拓扑和曲率变化' },
            { title: '轨迹信息提取', description: '在车道线结果基础上生成中心采样点，为后续车辆定位和轨迹规划提供几何参考' },
            { title: '效率提升', description: '用于辅助标注后，相比纯人工流程效率提升约 30%' }
        ]
    },
    5: {
        title: 'SD-DETR 2D 小目标检测',
        description: '针对小目标特征表达薄弱、定位敏感和上下文依赖强等难点，对 DETR 的匹配、骨干网络、边界框回归和蒸馏策略进行系统优化。',
        tags: ['SD-DETR', 'DINOv2', 'PyTorch', '小目标检测'],
        details: 'SD-DETR 面向低像素占比目标构建高质量检测方案。模型使用 Dense O2O Matching 打破一对一匹配的稀疏监督瓶颈，以 DINOv2 自监督骨干提取更具泛化能力的语义特征；通过细粒度分布优化 FDR 将边界框回归由点估计转化为概率分布估计，并使用全局最优自蒸馏 GO-LSD 将深层解码器知识传递至浅层。匹配感知损失 MAL 根据匹配质量动态调整监督强度，抑制低质量样本对训练稳定性的干扰。',
        technologies: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'PyTorch', icon: 'fas fa-brain' },
            { name: 'DETR', icon: 'fas fa-object-group' },
            { name: 'DINOv2', icon: 'fas fa-network-wired' },
            { name: 'YOLO', icon: 'fas fa-crosshairs' }
        ],
        metrics: [
            { value: '52.3%', label: '小目标 mAP 50:95' },
            { value: '85.9', label: 'Pixel Recall（x10^-4）' },
            { value: '24.3s', label: '50 张图平均标注时间' },
            { value: '0.763', label: '辅助标注 mean-IoU' }
        ],
        galleryTitle: '技术方案与实验结果',
        screenshots: [
            {
                src: 'assets/sd-detr/architecture.png',
                alt: 'SD-DETR 模型架构图',
                title: '模型架构',
                description: '以 DINOv2 编码器和多层解码器为基础，通过分布式边界框优化逐层修正初始检测框。'
            },
            {
                src: 'assets/sd-detr/small-object-map.png',
                alt: '不同模型在小目标验证集上的 mAP 对比',
                title: '小目标精度对比',
                description: 'SD-DETR-L 在 8.7k 小目标验证集上的 mAP 50:95 达到 52.3%，优于对比模型。'
            },
            {
                src: 'assets/sd-detr/pixel-recall.png',
                alt: '不同模型的小目标 Pixel Recall 对比',
                title: '像素召回能力',
                description: 'SD-DETR-L 的 Pixel Recall 达到 85.9（x10^-4），体现出更强的小目标像素覆盖能力。'
            },
            {
                src: 'assets/sd-detr/accuracy-latency.png',
                alt: 'SD-DETR 精度与推理延迟对比',
                title: '精度与延迟权衡',
                description: '在 3090 GPU 上对比不同规模模型，展示 SD-DETR 在精度提升与推理成本之间的权衡。'
            },
            {
                src: 'assets/sd-detr/training-convergence.png',
                alt: 'SD-DETR 训练轮次与 AP 收敛曲线',
                title: '训练收敛表现',
                description: 'SD-DETR-L 在相同训练轮次下保持更高 AP，Dense O2O Matching 有效改善训练效率。'
            },
            {
                src: 'assets/sd-detr/annotation-efficiency.png',
                alt: '不同模型辅助标注的 mean-IoU 和标注时间对比',
                title: '辅助标注实验',
                description: '50 张图像实验中，SD-DETR-L 达到 0.763 mean-IoU，平均标注时间降至 24.3 秒。'
            }
        ],
        features: [
            { title: 'Dense O2O Matching', description: '提高正样本密度，缓解 DETR 稀疏监督和小目标训练冷启动问题' },
            { title: 'DINOv2 Backbone', description: '利用自监督预训练学习更泛化的底层视觉模式，增强低分辨率目标表征' },
            { title: 'FDR 细粒度分布优化', description: '独立建模并微调边界框各条边，将点回归转化为分布估计以提升定位稳定性' },
            { title: 'GO-LSD 自蒸馏', description: '将最后一层解码器特征蒸馏至浅层，在较低额外开销下增强早期特征' },
            { title: 'MAL 匹配感知损失', description: '动态区分高质量和低质量匹配，降低噪声监督并提升训练稳定性' }
        ]
    },
    6: {
        title: '无人挖掘机铲斗检测',
        description: '利用激光雷达和三维目标检测算法识别无人挖掘机铲斗位置，为远程操控提供地面落点参考。',
        tags: ['PointPillars', 'OpenPCDet', 'TensorRT', 'ROS'],
        details: '项目从 rosbag 点云解析、数据清洗与标注开始，基于 OpenPCDet 训练 PointPillars 模型，并利用预训练模型辅助扩充数据集。完成参数调优后，将模型转换为 ONNX 并部署到 NVIDIA Orin 工控机，使用 TensorRT 加速推理，最后通过 ROS 话题发布铲斗点云位置用于落点投影。',
        technologies: [
            { name: 'Python / C++', icon: 'fas fa-code' },
            { name: 'ROS', icon: 'fas fa-project-diagram' },
            { name: 'OpenPCDet', icon: 'fas fa-cubes' },
            { name: 'PointPillars', icon: 'fas fa-border-all' },
            { name: 'TensorRT', icon: 'fas fa-microchip' },
            { name: 'NVIDIA Orin', icon: 'fas fa-memory' }
        ],
        features: [
            { title: '点云数据闭环', description: '完成 rosbag 拆帧、清洗、标注、预训练推理和人工筛查流程' },
            { title: '三维目标检测', description: '基于 PointPillars 检测铲斗三维位置并提取目标点云' },
            { title: '边缘端部署', description: '将模型转换为 ONNX，并在 NVIDIA Orin 上通过 TensorRT 加速' },
            { title: '实时性能', description: '部署后的模型推理速度达到 50 FPS，满足实时检测需求' },
            { title: 'ROS 集成', description: '通过 ROS 话题发布检测结果，支持后续铲斗落点投影' }
        ]
    }
};

// 获取 URL 参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 显示项目详情
function displayProjectDetail() {
    const projectId = getUrlParameter('project');
    const project = projectDetails[projectId];

    if (!project) {
        document.getElementById('projectDetail').innerHTML = `
            <div style="text-align: center; padding: 5rem 0;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h2>项目未找到</h2>
                <p>请返回<a href="index.html#projects">项目列表</a></p>
            </div>
        `;
        return;
    }

    const technologiesHTML = project.technologies.map(tech => `
        <div class="tech-card">
            <i class="${tech.icon}"></i>
            <h3>${tech.name}</h3>
        </div>
    `).join('');

    const featuresHTML = project.features.map(feature => `
        <div class="feature-item">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');

    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    const projectActionHTML = project.liveUrl ? `
        <a href="${project.liveUrl}" class="project-action" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
            ${project.liveLabel || '访问项目'}
        </a>
    ` : '';
    const screenshotsHTML = project.screenshots ? `
        <div class="project-section">
            <h2>${project.galleryTitle || '界面展示'}</h2>
            <div class="screenshot-gallery">
                ${project.screenshots.map(screenshot => `
                    <figure class="screenshot-card">
                        <a href="${screenshot.src}" target="_blank" rel="noopener noreferrer">
                            <img src="${screenshot.src}" alt="${screenshot.alt}" loading="lazy">
                        </a>
                        <figcaption>
                            <h3>${screenshot.title}</h3>
                            <p>${screenshot.description}</p>
                        </figcaption>
                    </figure>
                `).join('')}
            </div>
        </div>
    ` : '';
    const metricsHTML = project.metrics ? `
        <div class="project-section">
            <h2>关键指标</h2>
            <div class="metrics-grid">
                ${project.metrics.map(metric => `
                    <div class="metric-card">
                        <strong>${metric.value}</strong>
                        <span>${metric.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    document.getElementById('projectDetail').innerHTML = `
        <a href="index.html#projects" class="back-button">
            <i class="fas fa-arrow-left"></i> 返回项目列表
        </a>
        <div class="project-header">
            <h1>${project.title}</h1>
            <div class="project-meta">${tagsHTML}</div>
            <p class="project-description">${project.description}</p>
            <div class="project-actions">${projectActionHTML}</div>
        </div>

        <div class="project-section">
            <h2>项目概述</h2>
            <p>${project.details}</p>
        </div>

        ${metricsHTML}

        <div class="project-section">
            <h2>技术栈</h2>
            <div class="tech-grid">${technologiesHTML}</div>
        </div>

        ${screenshotsHTML}

        <div class="project-section">
            <h2>核心功能</h2>
            <div class="project-features">${featuresHTML}</div>
        </div>
    `;

    document.title = `${project.title} - 我的个人主页`;
}

document.addEventListener('DOMContentLoaded', displayProjectDetail);
